export default {
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_GITHUB_TOKEN(state, token){
    state.githubToken = token
  },
  SET_USER(state, data) {
    state.user = data.data
  },
  SET_ARTICLES(state, data) {
    state.articles = data
  }
}
