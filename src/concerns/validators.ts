// NOTE: These are functions which RETURN validator functions. That way, you can
// use them in Vue prop validators like:
//
//   props: {
//     someValue: {
//       type: Number,
//       validator: isOneOf([1, 2, 3]),
//     },
//   },
//
// ...or in plain JS/TS like:
//
//   const isOneOrTwoOrThree = isOneOf([1, 2, 3]);
//   isOneOrTwoOrThree(10); //=> false
//   isOneOrTwoOrThree(2);  //=> true

// returns true if the value is in the provided array
export const isOneOf = function<T>(list: T[]): (val: T) => boolean {
  return (val: T) => list.includes(val);
};

// returns true if the array to validate only contains items in the provided array
export const allAreIn = function<T>(list: T[]): (val: T[]) => boolean {
  return (listToValidate: T[]) => listToValidate.every(isOneOf(list));
};

// returns true if the value is between the first arg and second arg, inclusive
export const isBetween = function(minVal: number, maxVal: number): (val: number) => boolean {
  return (val: number) => minVal <= val && val <= maxVal;
};

// returns true if the value is "present"; e.g.,
//             '' => false
//            ' ' => false
//             [] => false
//             {} => false
//      undefined => false
//           null => false
//          'foo' => true
//         [null] => true
//         [1, 2] => true
//   { foo: bar } => true
//              0 => true
//          false => true (!!!)
export const isPresent = function(): (val: any) => boolean {
  return (val: any) => {
    switch (typeof val) {
      case 'undefined': return false;
      case 'number': return !isNaN(val);
      case 'string': return val.trim() !== '';
      case 'object':
        if (!val) return false;
        if (val.constructor === Object) return Object.keys(val).length > 0;
        if (val.constructor === Array) return val.length > 0;
        return true;
      default: return true;
    }
  };
};

export const allArePresent = function(): (ary: any[]) => boolean {
  return (ary: any[]) => ary.every(isPresent());
};

interface Shape {
  [key: string]: string|Function|Shape|null|undefined|(string|Function|Shape|null|undefined)[];
}

// Takes a Shape as an argument, returns true if the value matches the shape.
// Shape is an object with properties you want to find in the object, and types
// for the values those properties should return. You can provide a single type
// or an array of possible types. Types can be strings (case insensitive),
// constructors, classes, JavaScript data types, null, undefined, or even other
// shapes. e.g.,
//
// class Dog {
//   constructor() { this.meows = false }
// }
//
// const isShapedAsDefined = isShaped({
//   str:       String,
//   strNum:    ['string', Number],
//   nil:       null,
//   undNil:    [undefined, 'null'],
//   func:      Function,
//   undAryObj: ['undefined', 'array', Object],
//   aryObj:    [Array, 'object'],
//   isDog:     Dog,
//   kindaDog:  { meows: Boolean },
// });
//
// isShapedAsDefined({
//   str:       'hello',
//   strNum:    123,
//   nil:       null,
//   undNil:    window.gobbledegook,
//   func:      (wrapped) => { return wrapped; },
//   undAryObj: [1, 2, 3],
//   aryObj:    { foo: 'bar' },
//   isDog:     new Dog(),
//   kindaDog:  { meows: false },
// }); //=> true
//
// isShapedAsDefined({
//   str:       123,
//   strNum:    [],
//   nil:       undefined,
//   undNil:    'hello',
//   func:      {},
//   undAryObj: null,
//   aryObj:    () => { return ['in', 'a', 'func', 'here']; },
//   isDog:     { meows: false },
//   kindaDog:  { foo: 'bar' },
// }); //=> false; any of these values would fail the validation
//
export const isShaped = function(shape: Shape): (obj: { [index: string]: any }) => boolean {
  return (obj: { [index: string]: any }) => Object.keys(shape).every((property) => {
    const shapeEdge = shape[property];
    const propTypes = Array.isArray(shapeEdge) ? shapeEdge : [shapeEdge];
    const value = obj[property];

    const isConstructor = (rawType: (typeof propTypes[number])): boolean => {
      if (!rawType) return false;

      // e.g., rawType === 'date', rawType === 'array', etc.
      if (typeof rawType === 'string'
        && rawType !== 'undefined'
        && rawType !== 'null'
        && rawType !== 'object'
      ) return true;

      // e.g., rawType === Date, rawType === Array, etc.
      return typeof rawType === 'function' && rawType.prototype && !!rawType.name.match(/^[A-Z]/);
    };

    const isUndefined = (rawType: (typeof propTypes[number])): boolean => {
      // e.g., rawType === 'undefined'
      if (typeof rawType === 'string') return rawType.toLowerCase() === 'undefined';

      // e.g., rawType === undefined
      return typeof rawType === 'undefined';
    };
    
    const isNull = (rawType: (typeof propTypes[number])): boolean => {
      // e.g., rawType === 'null'
      if (typeof rawType === 'string') return rawType.toLowerCase() === 'null';

      // e.g., rawType === null
      return rawType === null;
    };

    const isValidShape = (potentialShape: any): boolean => {
      if (!potentialShape)                    return false;
      if (typeof potentialShape !== 'object') return false;
      if (Array.isArray(potentialShape))      return false;
      if (potentialShape instanceof Date)     return false;
      return Object.keys(potentialShape).every((key) => {
        const propType = potentialShape[key];
        if (isUndefined(propType))        return true;
        if (isNull(propType))             return true;
        if (isConstructor(propType))      return true;
        if (Array.isArray(propType))      return true;
        if (typeof propType === 'object') return true;
        return false;
      });
    };

    return propTypes.some((type) => {
      if (isUndefined(type)) return typeof value === 'undefined';
      if (isNull(type))      return value === null;
      if (isConstructor(type)) {
        if (!value || !value.constructor) return false;
        const constructorType = type as Function|string;
        if (typeof constructorType === 'function') return value instanceof constructorType;
        return value.constructor.name.toLowerCase() === constructorType.toLowerCase();
      }
      if (isValidShape(type)) return isShaped(type as Shape)(value);
      return false;
    });
  });
};

export const allAreShaped = function(shape: Shape): (ary: object[]) => boolean {
  return (ary: object[]) => ary.every(isShaped(shape));
};

// //   const validatePhone = isPhoneNumber({ allowBlank: false });
// //   validatePhone('7815559009')        //=> true
// //   validatePhone('17815559009')       //=> true
// //   validatePhone('+1 (781) 555-9009') //=> true
// //   validatePhone('')                  //=> false (true if `{ allowBlank: true }`)
// //   validatePhone('000')               //=> false
// //   validatePhone('ffff')              //=> false
// //   validatePhone(null)                //=> false
// //   validatePhone({a: 'A'})            //=> false
// //   validatePhone(undefined, true, 3)  //=> false
// export const isPhoneNumber = function({ allowBlank }: { allowBlank: boolean }): (value: any) => boolean {
//   return (value: any) => {
//     if (allowBlank && _.isUndefined(value))        return true;
//     if (allowBlank && _.isNull(value))             return true;
//     if (allowBlank && _.isString(value) && !value) return true;

//     const digitized = `${value}`.replace(/\D/g, '');
//     const patternValid = digitized.length === 10 || (digitized.length === 11 && digitized[0] === '1');
//     return patternValid;
//   };
// };

// export const isEmail = function({ allowBlank }: { allowBlank: boolean }): (value: any) => boolean {
//   return (value: any) => {
//     if (allowBlank && _.isUndefined(value))        return true;
//     if (allowBlank && _.isNull(value))             return true;
//     if (allowBlank && _.isString(value) && !value) return true;

//     const valString = `${value}`.trim();
//     return EmailValidator.validate(valString);
//   };
// };
