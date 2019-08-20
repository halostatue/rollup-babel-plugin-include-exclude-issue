# Demonstrate a Bug? in `rollup-babel-plugin`

I used `yarn` for managing this, but theoretically this should happen with
`npm` as well.

1. `yarn install`
2. `yarn run rollup`: uses `{ exclude: ['node_modules/**'] }` for babel
   config. This works OK (do not worry about missing globals, etc.).
3. `yarn run rollup:broken`: uses `{ exclude: ['node_modules/**'],
   include: ['node_modules/vue-password/**'] }`. This fails.
