# Lief

Lightweight component library for [Vue.js](https://vuejs.org/).

## why

[ElementUI](https://element.eleme.io) is a beautiful component library, and Lief seeks to emulate its form and function. Element has a few issues that make it difficult to work with for certain use-cases. The most important of these are:

1. it's heavy on re-renders and side effects
1. when issues on mobile devices are reported, the maintainers simply _close_ those issues; it is designed to be a _desktop_ UI library, and is "not compatible with mobile devices"

Element is a fantastic lib, with great support and a mature feature set. Lief just wants to take a slightly different approach to reusable component development, in an attempt to cover some areas that are not currently Element's focus.

## how

Lief is pretty young right now, but the intent is to meet the following goals and adhere to the following practices:

### goals

- reach reasonable UI parity with each of ElementUI's components
  - this does _not_ mean to replicate it strictly; Lief is inspired by Element's aesthetics, but it isn't a "clone"
- reach reasonable component feature parity with Element (even _less_ strictly replicated... feature parity !== API symmetry)
  - less "bag of options"-style configuration
  - less mixing responsibilities (e.g., passing "16px" as padding through props)
  - clear and easy class-based CSS style overrides
  - allow custom content to remain easily accessible to parent components through the use of slots
- establish comprehensive documentation that includes:
  - clear method signatures
  - type declarations (via TypeScript)
  - human descriptions
  - visual/interactive examples
  - code samples
  - tutorials
- support IE9+, same as Vue.js

### practices

- keep it simple, stupid
- small components
- as little knowledge of parent components as possible
- composition is king; no yanking things out into the root or getting your grubby fingers all over the nice clean DOM
- sane defaults... _for everything_
- clear, explicit naming
- if you have to override a render, you're doing something wrong
- consistent code style leads to easy development; let the linter and the compiler guide you
- be opinionated, but don't try to do everything; be flexible, but not spineless
- if there's a good idea for a customization feature, expose the surface area in a generic way that allows the user to solve their own problem (e.g., allow passing a filter function as a prop, as opposed to having a static set of filter functions to "choose from")
- avoid mutation whenever humanly possible
- type strongly whenever humanly possible
- all that being said, [remember PEP 8](https://www.python.org/dev/peps/pep-0008/#a-foolish-consistency-is-the-hobgoblin-of-little-minds); I may not be a Python developer, but I love me some PEP 8

## Installation

Install via `yarn`:

```
you@lappy:~$ yarn add lief
```

Alternatively, install via `npm`:

```
you@lappy:~$ npm install --save lief
```

## Use

Component documentation is in progress.

For now, you can use two components in the following ways:

### LiefInput

```vue
<template>
  <LiefInput v-model="foobar" @keyup.enter="onSubmit" />
</template>

<script>
import Vue from 'vue';
import { LiefInput } from 'lief';

export default Vue.extend({
  components: {
    LiefInput,
  },

  data() {
    return {
      foobar: '',
    },
  },

  methods: {
    onSubmit() {
      alert(this.foobar);
    },
  },
});
</script>
```

### LiefLayout

```vue
<template>
  <div id="app">
    <button class="toggle-header" @click="showHeader = !showHeader">toggle header</button>
    <button class="toggle-footer" @click="showFooter = !showFooter">toggle footer</button>
    <button class="toggle-left" @click="showLeft = !showLeft">toggle left</button>
    <button class="toggle-right" @click="showRight = !showRight">toggle right</button>
    <LiefLayout class="layout">
      <template v-if="showHeader" slot="header">
        <div>LOGO.png</div>
        <div>look at me</div>
        <div class="navbar">
          <a href="#">log in</a>
          <a href="#">sign up</a>
        </div>
      </template>
      <div v-if="showLeft" slot="sidebar-left">
        left option 1<br>
        left option 2<br>
        left option 3<br>
        left option 4<br>
        left option 5<br>
        left option 6<br>
      </div>
      <div v-if="showRight" slot="sidebar-right">
        right option 1<br>
        right option 2<br>
        right option 3<br>
        right<br>
        right<br>
        right<br>
        right<br>
        right<br>
        right<br>
        right<br>
        right<br>
        right<br>
      </div>
      main main main main main<br>
      main main main main main<br>
      main main main main main<br><br>
      main main main main main<br><br>
      main main main main content
      <template v-if="showFooter" slot="footer">
        <div>
          footer footer footer<br>
          footer footer footer?????<br>
          foot
        </div>
        <div>
          bread and butter bread and butter<br>
          bread butter bread and butter!<br>
          bread and buttery bread
        </div>
        <div>
          <a href="#">corn and nachos</a><br>
          <a href="#">cream cheese, bacon</a><br>
          <a href="#">sour patch kids</a>
        </div>
      </template>
    </LiefLayout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LiefLayout from '@/components/layout';

export default Vue.extend({
  components: {
    LiefLayout,
  },

  data() {
    return {
      showLeft: true,
      showRight: true,
      showHeader: true,
      showFooter: true,
    };
  },
});
</script>

<style lang="sass" scoped>
.navbar
  a + a
    display: inline-block
    padding-left: 0.5em
</style>
```

You can always register the components globally, too, if you'd like.

## Contributing

Bug reports and pull requests for this project are welcome at its [GitHub page](https://github.com/kjleitz/lief). If you choose to contribute, please be nice so I don't have to run out of bubblegum, etc.

### Project setup

```
you@lappy:~$ git clone https://github.com/kjleitz/lief
you@lappy:~$ cd lief
you@lappy:~/lief$ yarn install
```

### Compiles, serves, and hot-reloads for development

```
you@lappy:~/lief$ yarn serve
```

### Compiles and minifies for npm

```
you@lappy:~/lief$ yarn build:lib
```

### Compiles and minifies documentation site

```
you@lappy:~/lief$ yarn build:doc
```

### ¿Por qué no los dos?

```
you@lappy:~/lief$ yarn build
```

## License

This project is open source, under the terms of the [MIT license](https://opensource.org/licenses/MIT).
