import httpService from './httpService'

const categoriesEndpoint = '/categories'

/**
 * Retrieves an array with all categories from categories endpoint
 * @async
 * @return Promise {object} all the requested categories
 */
export function getAll() {
  return httpService.get(categoriesEndpoint)
}

/**
 * Accepts an id to retrieve one category from categories endpoint
 * @async
 * @param {int} id
 * @return Promise {object} the requested category
 */
export function getOne(id) {
  return httpService.get(`${categoriesEndpoint}/${id}`)
}

/**
 * Accepts an object to send it to categories endpoint
 * @async
 * @param {object} category
 * @param {string} category.name
 * @param {string} category.image
 * @param {string} category.content
 * @return Promise {object} the created category
 */
export function add(category) {
  return httpService.post(categoriesEndpoint, category)
}

/**
 * Accepts an object to send it to categories endpoint
 * @async
 * @param {int} id
 * @param {object} category
 * @param {string} category.name
 * @param {string} category.image
 * @param {string} category.content
 * @return Promise {object} the created category
 */
export function update(id, category) {
  return httpService.put(`${categoriesEndpoint}/${id}`, category)
}

/**
 * Accepts an id to delete one category from categories endpoint
 * @async
 * @param {int} id
 * @return Promise {object} the deleted category
 */
export function deleteTestimonial(id) {
  return httpService.delete(`${categoriesEndpoint}/${id}`)
}
