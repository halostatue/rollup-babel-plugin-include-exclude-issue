<template>
  <div>{{ films }}</div>
</template>

<script>
import graphql from "@common/graphql";

export default {
  name: "home-page",
  data() {
    return {
      films: null
    };
  },
  apollo: {
    films: {
      query: graphql.films.all,
      fetchPolicy: "network-only",
      variables() {
        return { first: 3 };
      }
    }
  }
};
</script>

<style lang='scss' scoped>
</style>
