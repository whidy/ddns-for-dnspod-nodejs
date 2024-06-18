const CreateRecord = function (clientInstance, params) {
  clientInstance.CreateRecord(params).then(
    (data) => {
      console.log(data);
    },
    (err) => {
      console.error("error", err);
    }
  );
};

module.exports = CreateRecord;
