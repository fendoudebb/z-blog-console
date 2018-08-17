import {articleInfo, editArticle, publishArticle, previewEditArticle} from '@/api/publish';

export default {
  state: {
    editArticleId: -1,
    title: '',
    content: '',
    articleProperty: '',
    category: '',
    keywords: '',
    description: '',
  },
  mutations: {
    setEditArticleId(state, editArticleId) {
      state.editArticleId = editArticleId
    },
    setTitle(state, title) {
      state.title = title
    },
    setContent(state, content) {
      state.content = content
    },
    setArticleProperty(state, articleProperty) {
      state.articleProperty = articleProperty
    },
    setCategory(state, category) {
      state.category = category
    },
    setKeywords(state, keywords) {
      state.keywords = keywords
    },
    setDescription(state, description) {
      state.description = description
    },
  },
  getters: {
    getEditArticleId: state => {
      return state.editArticleId;
    }
  },
  actions: {
    handlePublishArticle({state, commit}) {
      return new Promise((resolve, reject) => {
        const data = {
          author: sessionStorage.getItem('username'),
          title: state.title,
          content: state.content,
          articleProperty: state.articleProperty,
          category: state.category,
          keywords: state.keywords,
          description: state.description,
        };
        publishArticle(data).then(value => {
          resolve(value);
        }).catch(reason => {
          reject(reason);
        });
      })
    },
    handleEditArticle({state, commit}) {
      return new Promise((resolve, reject) => {
        const data = {
          author: sessionStorage.getItem('username'),
          title: state.title,
          content: state.content,
          articleProperty: state.articleProperty,
          category: state.category,
          keywords: state.keywords,
          description: state.description,
        };
        editArticle(state.editArticleId, data).then(value => {
          console.log("editArticleId: " + state.editArticleId);
          resolve(value);
        }).catch(reason => {
          reject(reason);
        });
      })
    },
    handleArticleInfo({state, commit}) {
      return new Promise((resolve, reject) => {
        const data = {
          articleId: state.editArticleId
        };
        articleInfo(data).then(value => {
          console.log("editArticleId: " + state.editArticleId);
          resolve(value);
        }).catch(reason => {
          reject(reason);
        });
      })
    },
    handlePreviewEditArticle({state, commit}) {
      return new Promise((resolve, reject) => {
        const data = {
          author: sessionStorage.getItem('username'),
          title: state.title,
          content: state.content,
          articleProperty: state.articleProperty,
          category: state.category,
          keywords: state.keywords,
          description: state.description,
        };
        previewEditArticle(data).then(value => {
          console.log("previewEditArticle: " + JSON.stringify(data));
          resolve(value);
        }).catch(reason => {
          reject(reason);
        });
      })
    }
  },

}
