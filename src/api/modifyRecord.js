const ModifyRecord = function (clientInstance, params) {
  console.log(params)
  clientInstance.ModifyRecord(params).then(
    (data) => {
      console.log(data);
    },
    (err) => {
      console.error("error", err);
    }
  );
};

module.exports = ModifyRecord;
