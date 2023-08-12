const axios = require("axios");
const parse = require("../../utils/parse");
const LogErrorToFile = require("../../utils/errorLog");

class IntegrationsService {
  constructor() {}

  /**
   * Formatted list of files
   * @returns files Object list
   */
  async getListFiles() {
    //try {
    const token = "aSuperSecretKey"; // Reemplaza con tu token Bearer
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.get(
      "https://echo-serv.tbxnet.com/v1/secret/files",
      { headers }
    );
    //console.log(response.data.files);
    return response.data.files;
    // } catch (error) {
    //   console.error("Error en la solicitud a API 1:", error);
    //   res.status(500).json({ error: "Error al obtener datos de API 1" });
    // }
  }

  async getFileDetail(file) {
    console.log("getFileDetail:::::::" + file);
    try {
      const token = "aSuperSecretKey"; // Reemplaza con tu token Bearer
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      
      const response = await axios.get("https://echo-serv.tbxnet.com/v1/secret/file/" + file, { headers });
      
      console.log("Response Status:", response.status);
  
      if (response.status === 200) {
        const object = parse.parseResponseToObjects(response.data);
        return object;
      } else {
        console.log("Error en la respuesta:", response.data);
        LogErrorToFile.logErrorToFile("file:"+file,"-status:"+response.status+"-data:"+response.data);
        return { error: "Error en la respuesta", status: response.status };
      }
    } catch (error) {
      if (error.response) {
        console.log("Error en la respuesta:", error.response.data);
        console.log("Código de estado:", error.response.status);
        return { error: "Error en la respuesta", status: error.response.status };
      } else if (error.request) {
        console.log("Error en la petición:", error.request);
        return { error: "Error en la petición" };
      } else {
        console.log("Error:", error.message);
        return { error: "Error desconocido" };
      }
    }
  }
  
}

module.exports = IntegrationsService;
