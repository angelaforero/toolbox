/**
 * Interfaz para representar un resultado de API
 * @template T El tipo de datos de la respuesta
 */
class ApiResponse {
    /**
     * @param {boolean} success Indica si la solicitud tuvo éxito
     * @param {T} data Datos de la respuesta
     * @param {string} message Mensaje relacionado con el resultado
     */
    constructor(success, data, message) {
      this.success = success;
      this.data = data;
      this.message = message;
    }
  }