module.exports = {
     parseResponseToObjects : function(response) {
        const lines = response.trim().split('\n');
        const objects = [];
      
        for (const line of lines) {
          const values = line.split(',');
      
          const obj = {
            file: values[0],
            text: values[1],
            number: parseInt(values[2], 10),
            hex: values[3]
          };
      
          objects.push(obj);
        }
      
        return objects;
    }
  };