# 一个用于个人使用的服务器DDNS工具

使用条件：

如果你拥有一台自己的服务器，并且服务器对应的路由器，是一台软路由（虽然我的是硬路由但是我还是搞成了变态的路由，又能软又能硬，他就是小米AX3600）。还需要一个域名，我这里是腾讯云的DNSPod服务。

并且你没有公网的ipv4，更不要提固定IP了。所以我打算，将软路由上添加一个bash脚本，不断扫描（ip -n）局域网内的所有设备。通过创建一个crontab来发起内网的nodejs服务请求，更新ddns配置。

有空在写详细的流程。先建个仓库先。

## 通过腾讯云API实现

文档及在线调试：<https://console.cloud.tencent.com/api/explorer?Product=dnspod&Version=2021-03-23&Action=CreateRecord>
