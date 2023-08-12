
const IntegrationService = require('../services/integrations.service');
const utilClean = require("../../utils/cleanArray");

class FilesService {
  constructor() {
    this.IntegrationService = new IntegrationService();
  }

  /**
   * Formatted list of files
   * @returns files Object list
   */
  async getTransformationData() {
    const list = await this.IntegrationService.getListFiles();
    let finalObject = [];
    const errorlog = [];
    for (const file of list) {
        const fileInfo = await this.IntegrationService.getFileDetail(file);
        if(fileInfo.length>0){
            for (const info of fileInfo) {
                finalObject.push(info);
            }
        }else{
            console.log("no tine registros");
        }
        finalObject = utilClean.cleanArray(finalObject);
    }
    console.log("FINAL RESULT::::");
    console.log(finalObject);
    console.log(finalObject.length);
    return finalObject;
  }

}

module.exports = FilesService;
