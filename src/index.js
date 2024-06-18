const { secretId, secretKey, domain } = require("./config");
const { dnspod } = require("tencentcloud-sdk-nodejs-dnspod");
const CreateRecord = require("./api/createRecord");
const ModifyRecord = require("./api/modifyRecord");
const DnspodClient = dnspod.v20210323.Client;

const clientConfig = {
  credential: {
    secretId,
    secretKey,
  },
  region: "",
  profile: {
    httpProfile: {
      endpoint: "dnspod.tencentcloudapi.com",
    },
  },
};

const client = new DnspodClient(clientConfig);
const subDomain = "test2";
const paramsRecordList = {
  Domain: domain,
  Subdomain: subDomain,
};

const paramsRecordItem = {
  Domain: domain,
  SubDomain: subDomain,
  RecordType: "AAAA",
  RecordLine: "默认",
  Value:
    "240e:36f:15e4:1600:7d6d:2d66:7f3a:" +
    Math.random().toString(16).slice(2, 6),
};
client.DescribeRecordList(paramsRecordList).then(
  (data) => {
    // 存在则修改记录
    console.log("修改记录");
    const RecordId = data.RecordList[0].RecordId;
    ModifyRecord(client, Object.assign({ RecordId }, paramsRecordItem));
  },
  (err) => {
    // console.error("error", err);
    // 不存在则添加记录
    console.log("新增记录");
    CreateRecord(client, paramsRecordItem), paramsRecordItem;
  }
);
