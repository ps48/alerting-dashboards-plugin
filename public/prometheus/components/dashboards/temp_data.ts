export const alertData = [    {
  "alerts": [
      {
          "annotations": {
              "description": "A Prometheus job has disappeared\n VALUE : 1\n LABELS : map[__name__:up account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default net_host_name:10.0.11.135 net_host_port:443 region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver]",
              "summary": "Prometheus job missing (instance 10.0.11.135:443)"
          },
          "endsAt": "2025-03-20T09:19:45.123Z",
          "fingerprint": "0a9580dabaf0026b",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:45.123Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:45.248Z",
          "generatorURL": "/graph?g0.expr=up%7Bjob%3D%22apiserver%22%7D+%3D%3D+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "DemoAlert",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "firing"
          }
      },
      {
          "annotations": {
              "description": "A Prometheus job has disappeared\n VALUE : 1\n LABELS : map[__name__:up account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default net_host_name:10.0.10.156 net_host_port:443 region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver]",
              "summary": "Prometheus job missing (instance 10.0.10.156:443)"
          },
          "endsAt": "2025-03-20T09:20:45.123Z",
          "fingerprint": "38faab42ad0f9287",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:45.123Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:45.198Z",
          "generatorURL": "/graph?g0.expr=up%7Bjob%3D%22apiserver%22%7D+%3D%3D+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "DemoAlert",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "firing"
          }
      }
  ],
  "labels": {
      "alertname": "DemoAlert"
  },
  "receiver": {
      "name": "default"
  }
},
{
  "alerts": [
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/external-secrets.io/clustersecretstores/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "010e3da8ca76df51",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:53:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/external-secrets.io/clustersecretstores/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/horizontalpodautoscalers/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "02416b3e9b7ebe16",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/horizontalpodautoscalers/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:externalsecrets.external-secrets.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "02dbd7265f3de287",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T16:23:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "externalsecrets.external-secrets.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/persistentvolumeclaims/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "0347f90a2a82de19",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:50:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/persistentvolumeclaims/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/crd.k8s.amazonaws.com/eniconfigs/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "036d8cd2a2a7adb8",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:54:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.599Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/crd.k8s.amazonaws.com/eniconfigs/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/endpointslices/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "058924ecbf17be91",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/endpointslices/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/networking.istio.io/destinationrules/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "0593fe75efdd60db",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/networking.istio.io/destinationrules/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/cert-manager.io/clusterissuers/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "08a66d5efb173f26",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:54:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.599Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/cert-manager.io/clusterissuers/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/image.toolkit.fluxcd.io/imageupdateautomations/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "08f366b1b311eec9",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:54:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/image.toolkit.fluxcd.io/imageupdateautomations/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:externalsecrets.external-secrets.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "0abeb431b174a5eb",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:53:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "externalsecrets.external-secrets.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/external-secrets.io/externalsecrets/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "0c1d63d6eeecf589",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:53:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/external-secrets.io/externalsecrets/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/services/endpoints/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "0c1fa3958282fe1a",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.592Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/services/endpoints/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/priorityclasses/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "0cda55bba30db1bd",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/priorityclasses/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:istiooperators.install.istio.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "0d0fe07725819928",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "istiooperators.install.istio.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:securitygrouppolicies.vpcresources.k8s.aws]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "0d66e36480c52028",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "securitygrouppolicies.vpcresources.k8s.aws"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/source.toolkit.fluxcd.io/helmcharts/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "0d6c1b5fb543dd8e",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/source.toolkit.fluxcd.io/helmcharts/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/services/specs/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "0eb7c40922258490",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/services/specs/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:secretstores.external-secrets.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "0f87b43aa18aecf3",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:53:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.592Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "secretstores.external-secrets.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:pods]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "0feefa793b6e454a",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T16:02:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "pods"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/limitranges/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "10c73a06af2c4800",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/limitranges/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:alertmanagers.monitoring.coreos.com]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "10d10a3a2c725b4a",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "alertmanagers.monitoring.coreos.com"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/flowschemas/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "128d94713db6f051",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/flowschemas/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:services]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "12a0b669e394e476",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "services"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:workloadentries.networking.istio.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "13182274f8c3861d",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.599Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "workloadentries.networking.istio.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/apiregistration.k8s.io/apiservices/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "1363df1289d80713",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/apiregistration.k8s.io/apiservices/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/csidrivers/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "137caa14ef3b9c8b",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:50:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/csidrivers/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/services/endpoints/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "138a5b7886f88532",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:50:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/services/endpoints/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/external-secrets.io/secretstores/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "1399b374aa4e2b81",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/external-secrets.io/secretstores/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:orders.acme.cert-manager.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "13a50094bbc06bad",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "orders.acme.cert-manager.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/kustomize.toolkit.fluxcd.io/kustomizations/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "152c06289fb32719",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:53:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.592Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/kustomize.toolkit.fluxcd.io/kustomizations/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:kustomizations.kustomize.toolkit.fluxcd.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "1581ee7518e2baeb",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:53:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.592Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "kustomizations.kustomize.toolkit.fluxcd.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/cert-manager.io/certificaterequests/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "15d5b4f920b72e9d",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:53:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/cert-manager.io/certificaterequests/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:pods]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "15e962d951d499da",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:47:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "pods"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:amazoncloudwatchagents.cloudwatch.aws.amazon.com]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "1654e639bd57c726",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T17:53:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "amazoncloudwatchagents.cloudwatch.aws.amazon.com"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:providers.notification.toolkit.fluxcd.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "167c2ddf4bd8e0ef",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T17:27:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "providers.notification.toolkit.fluxcd.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:clusterroles.rbac.authorization.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "167f09243e4ec31e",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.592Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "clusterroles.rbac.authorization.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/monitoring.coreos.com/alertmanagerconfigs/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "16d582f46c9305ec",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:54:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/monitoring.coreos.com/alertmanagerconfigs/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:policyendpoints.networking.k8s.aws]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "1764feccba6d7d65",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.599Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "policyendpoints.networking.k8s.aws"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:secrets]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "17dfa10fe5e75023",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:55:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "secrets"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:clusterrolebindings.rbac.authorization.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "1893c1caedd09611",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "clusterrolebindings.rbac.authorization.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/notification.toolkit.fluxcd.io/receivers/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "18d9fac57840060d",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T17:27:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/notification.toolkit.fluxcd.io/receivers/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:resourcequotas]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "19810395d504f771",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "resourcequotas"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:helmrepositories.source.toolkit.fluxcd.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "1a08126e5a4761d1",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "helmrepositories.source.toolkit.fluxcd.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:telemetries.telemetry.istio.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "1a1d17546cea23a4",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "telemetries.telemetry.istio.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/install.istio.io/istiooperators/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "1a6957188773195e",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:54:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/install.istio.io/istiooperators/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:amazoncloudwatchagents.cloudwatch.aws.amazon.com]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "1ad6f1e8cf079736",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "amazoncloudwatchagents.cloudwatch.aws.amazon.com"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:grafanadashboards.grafana.integreatly.org]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "1b762e530c227f39",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T18:32:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "grafanadashboards.grafana.integreatly.org"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/cert-manager.io/issuers/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "1b806c1eb96be318",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:54:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/cert-manager.io/issuers/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:serviceentries.networking.istio.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "1b999ca2d1e97305",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.599Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "serviceentries.networking.istio.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:imageupdateautomations.image.toolkit.fluxcd.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "1c48b8ec7b1a1897",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.599Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "imageupdateautomations.image.toolkit.fluxcd.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:thanosrulers.monitoring.coreos.com]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "1c492c9b38138e1a",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.599Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "thanosrulers.monitoring.coreos.com"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:validatingwebhookconfigurations.admissionregistration.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "1edc60e2d98edaf1",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "validatingwebhookconfigurations.admissionregistration.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:receivers.notification.toolkit.fluxcd.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "1f200cdea4998187",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "receivers.notification.toolkit.fluxcd.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:clusterrolebindings.rbac.authorization.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "204b9976e31861fd",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "clusterrolebindings.rbac.authorization.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:eniconfigs.crd.k8s.amazonaws.com]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "20dc8f9195f7152c",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "eniconfigs.crd.k8s.amazonaws.com"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/replicasets/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "22d50bd2d7d9a11c",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/replicasets/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:mutatingwebhookconfigurations.admissionregistration.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "22da75028bd4564d",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "mutatingwebhookconfigurations.admissionregistration.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:clusterrolebindings.rbac.authorization.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "2419c2d3ddfa51cd",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "clusterrolebindings.rbac.authorization.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:cninodes.vpcresources.k8s.aws]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "24873871e42960a8",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:47:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "cninodes.vpcresources.k8s.aws"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/storageclasses/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "25a2f6e2047a2648",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/storageclasses/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:validatingwebhookconfigurations.admissionregistration.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "26642e640a537405",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "validatingwebhookconfigurations.admissionregistration.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/mutatingwebhookconfigurations/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "2668db0c6886bed8",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.592Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/mutatingwebhookconfigurations/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/podtemplates/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "2701f4aed98a5a49",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:50:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/podtemplates/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:opentelemetrycollectors.opentelemetry.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "270616c9dfb0dfba",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.599Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "opentelemetrycollectors.opentelemetry.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/notification.toolkit.fluxcd.io/providers/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "2852ef68c41b3ff1",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T17:27:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/notification.toolkit.fluxcd.io/providers/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:ingresses.networking.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "28b78634bcb9ef39",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:53:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "ingresses.networking.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:events]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "28c45ae3553dcef9",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T20:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "events"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/daemonsets/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "28dcd870bc2cfbfa",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/daemonsets/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:gateways.gateway.networking.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "29afdd6c91092633",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "gateways.gateway.networking.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:nodes]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "2a8a8872db75c6ab",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "nodes"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:configmaps]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "2b5e5256aac0fe11",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "configmaps"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/vpcresources.k8s.aws/cninodes/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "2c70941a4d25bed2",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:54:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/vpcresources.k8s.aws/cninodes/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:update region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:leases.coordination.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "2cb4330f6d14bd69",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "update",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "leases.coordination.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/validatingwebhookconfigurations/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "2d778e1619f29fa0",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/validatingwebhookconfigurations/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/clusterroles/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "2e396019d49f55a0",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:50:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/clusterroles/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:events]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "2ee1406e06f0e33d",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T17:31:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "events"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:deployments.apps]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "2f19bbd43c03a6a4",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "deployments.apps"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/events/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "304f5c841209c64e",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/events/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/grafana.integreatly.org/grafanadashboards/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "30ab517ec11731e3",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:54:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/grafana.integreatly.org/grafanadashboards/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:services]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "30de51eea0fc7c0a",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.592Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "services"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/deployments/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "313c2191d55aca61",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/deployments/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:opentelemetrycollectors.opentelemetry.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "31e0d0859e7426fe",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "opentelemetrycollectors.opentelemetry.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:update region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:leases.coordination.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "339932e66e358601",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "update",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "leases.coordination.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:priorityclasses.scheduling.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "346d5b44a2a63e64",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.592Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "priorityclasses.scheduling.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/certificatesigningrequests/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "36b1528553036053",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/certificatesigningrequests/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:serviceaccounts]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "36db36cb720dec49",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "serviceaccounts"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/podtemplates/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "37f2275a00f28c21",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/podtemplates/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/source.toolkit.fluxcd.io/helmrepositories/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "39758d766b2c3c9f",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:47:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/source.toolkit.fluxcd.io/helmrepositories/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:flowschemas.flowcontrol.apiserver.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "3aa9f387dc4354ac",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "flowschemas.flowcontrol.apiserver.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/gateway.networking.k8s.io/gatewayclasses/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "3ac53cd8443cdd26",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/gateway.networking.k8s.io/gatewayclasses/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/flowschemas/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "3b647e685800dea9",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/flowschemas/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:alerts.notification.toolkit.fluxcd.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "3b8af4497ab5772c",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T17:27:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.592Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "alerts.notification.toolkit.fluxcd.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/monitoring.coreos.com/podmonitors/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "3bce72686c8a5cf8",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:54:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/monitoring.coreos.com/podmonitors/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/grafana.integreatly.org/grafanadatasources/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "3ce890e6d4c2b6c8",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:49:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.592Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/grafana.integreatly.org/grafanadatasources/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:gitrepositories.source.toolkit.fluxcd.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "3d3d6020ce9fae4b",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:47:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.592Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "gitrepositories.source.toolkit.fluxcd.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/prioritylevelconfigurations/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "3d4330bf06e48494",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/prioritylevelconfigurations/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:grafanadashboards.grafana.integreatly.org]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "3d7e061c777d407d",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "grafanadashboards.grafana.integreatly.org"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/monitoring.coreos.com/scrapeconfigs/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "3da07c77c86593eb",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:54:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/monitoring.coreos.com/scrapeconfigs/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/resourcequotas/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "3fb13322b17157a2",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:50:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/resourcequotas/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/external-secrets.io/clusterexternalsecrets/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "3fe7fb6cb6a92689",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:54:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.599Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/external-secrets.io/clusterexternalsecrets/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:kustomizations.kustomize.toolkit.fluxcd.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "407511e3b2d79727",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-19T00:12:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "kustomizations.kustomize.toolkit.fluxcd.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/runtimeclasses/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "4288b26f0041b513",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:50:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/runtimeclasses/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/monitoring.coreos.com/servicemonitors/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "42bb412c1a58554c",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:53:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/monitoring.coreos.com/servicemonitors/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/opentelemetry.io/opentelemetrycollectors/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "43a4dfc40dad0da8",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/opentelemetry.io/opentelemetrycollectors/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/acme.cert-manager.io/orders/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "4461dc90a342e50b",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:53:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.592Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/acme.cert-manager.io/orders/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/ingress/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "45471586dd84effa",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:50:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/ingress/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:update region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:nodes]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "4617d3e3db037bfa",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:53:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "update",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "nodes"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/external-secrets.io/externalsecrets/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "466ccb47637060c1",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/external-secrets.io/externalsecrets/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/csidrivers/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "47072e4345487233",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/csidrivers/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/persistentvolumes/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "481ab1284c6f6775",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.592Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/persistentvolumes/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/source.toolkit.fluxcd.io/ocirepositories/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "48c1cc727d1acd74",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:49:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/source.toolkit.fluxcd.io/ocirepositories/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/cloudwatch.aws.amazon.com/amazoncloudwatchagents/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "48d9a17b8079abf4",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:54:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/cloudwatch.aws.amazon.com/amazoncloudwatchagents/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/notification.toolkit.fluxcd.io/receivers/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "494b0b238fc04675",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/notification.toolkit.fluxcd.io/receivers/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:issuers.cert-manager.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "497fc4d1467cb6a8",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "issuers.cert-manager.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:opentelemetrycollectors.opentelemetry.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "4a658b494649d50a",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T17:49:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.592Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "opentelemetrycollectors.opentelemetry.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:daemonsets.apps]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "4a7fd5e303c7a41b",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "daemonsets.apps"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/notification.toolkit.fluxcd.io/alerts/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "4ae3808a89f991fa",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/notification.toolkit.fluxcd.io/alerts/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:proxyconfigs.networking.istio.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "4bbb9226766a9593",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "proxyconfigs.networking.istio.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:clusterroles.rbac.authorization.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "4c3291a2c1a1ad4e",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "clusterroles.rbac.authorization.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:prometheusrules.monitoring.coreos.com]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "4c4f997bfc6aa03d",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "prometheusrules.monitoring.coreos.com"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:apiServerIPInfo]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "4d6e814ef00217c2",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "apiServerIPInfo"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:serviceaccounts]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "4dea14bf49e439ad",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:47:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "serviceaccounts"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/clusterrolebindings/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "4e4bfd14c00ba139",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.599Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/clusterrolebindings/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/apiextensions.k8s.io/customresourcedefinitions/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "4eac70db43053159",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.592Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/apiextensions.k8s.io/customresourcedefinitions/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:prometheusagents.monitoring.coreos.com]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "4fc8101ca92e47a4",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "prometheusagents.monitoring.coreos.com"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:servicenodeportallocations]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "5042de03ae436fd7",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "servicenodeportallocations"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:sidecars.networking.istio.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "505cd118b841a83a",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "sidecars.networking.istio.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:flowschemas.flowcontrol.apiserver.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "5175d118c4ddd650",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "flowschemas.flowcontrol.apiserver.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:clustersecretstores.external-secrets.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "52faae2d140441af",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "clustersecretstores.external-secrets.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/cronjobs/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "530895476945b3a3",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/cronjobs/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/replicasets/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "54b3d3c985f65e64",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/replicasets/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:grafanas.grafana.integreatly.org]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "561af46112a1272b",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-19T00:12:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.599Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "grafanas.grafana.integreatly.org"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:endpointslices.discovery.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "5632629a1f1332ee",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "endpointslices.discovery.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/opentelemetry.io/opentelemetrycollectors/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "569115e5aa591770",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:53:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/opentelemetry.io/opentelemetrycollectors/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:leases.coordination.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "5703dab3dc0be3c6",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.592Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "leases.coordination.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:gateways.networking.istio.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "57c66ecf289c38d3",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "gateways.networking.istio.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/gateway.networking.k8s.io/httproutes/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "586af5237717c86e",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/gateway.networking.k8s.io/httproutes/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:cninodes.vpcresources.k8s.aws]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "58fc8d6845495ce4",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "cninodes.vpcresources.k8s.aws"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:peerauthentications.security.istio.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "597b28b97ec1b10b",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "peerauthentications.security.istio.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/monitoring.coreos.com/prometheusagents/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "59beb906d94760d2",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:54:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/monitoring.coreos.com/prometheusagents/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/roles/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "5a060763d5398c98",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/roles/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:instrumentations.cloudwatch.aws.amazon.com]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "5acf0971309fab09",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "instrumentations.cloudwatch.aws.amazon.com"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:grafanas.grafana.integreatly.org]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "5bd414fdb540939f",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:53:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "grafanas.grafana.integreatly.org"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/security.istio.io/peerauthentications/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "5c0129169b3564b9",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:54:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.599Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/security.istio.io/peerauthentications/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:helmreleases.helm.toolkit.fluxcd.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "5d550db116367640",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:47:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "helmreleases.helm.toolkit.fluxcd.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/grafana.integreatly.org/grafanas/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "5e3d67abe9aeefa7",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:54:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/grafana.integreatly.org/grafanas/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:alerts.notification.toolkit.fluxcd.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "5e63b83340d9e8e8",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "alerts.notification.toolkit.fluxcd.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:update region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:events]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "5edbcd1a6b073706",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T16:06:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "update",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "events"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/monitoring.coreos.com/servicemonitors/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "5f46d8e61c5bc6b4",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:54:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/monitoring.coreos.com/servicemonitors/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/daemonsets/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "5fd973b1c7bf3172",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/daemonsets/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:configmaps]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "61e083edbc881245",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "configmaps"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:authorizationpolicies.security.istio.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "6322f29e80403171",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "authorizationpolicies.security.istio.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/cloudwatch.aws.amazon.com/amazoncloudwatchagents/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "63899f67f8f0ef6c",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:53:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/cloudwatch.aws.amazon.com/amazoncloudwatchagents/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:apiServerIPInfo]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "63a450a3f4a583be",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "apiServerIPInfo"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:horizontalpodautoscalers.autoscaling]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "63b35c39526a02c7",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "horizontalpodautoscalers.autoscaling"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/cloudwatch.aws.amazon.com/instrumentations/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "64309bc9cfcdb059",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:54:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/cloudwatch.aws.amazon.com/instrumentations/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:gatewayclasses.gateway.networking.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "69c370af2afed610",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "gatewayclasses.gateway.networking.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:update region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:customresourcedefinitions.apiextensions.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "6a23940ba8153a12",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "update",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "customresourcedefinitions.apiextensions.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:workloadgroups.networking.istio.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "6b5b5d1f58a2768d",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "workloadgroups.networking.istio.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:serviceipallocations]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "6dae1051702c38b5",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "serviceipallocations"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/networking.istio.io/workloadgroups/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "6f3d4bfdbf381911",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/networking.istio.io/workloadgroups/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:kustomizations.kustomize.toolkit.fluxcd.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "6f57fe29533cb3f7",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:53:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "kustomizations.kustomize.toolkit.fluxcd.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/helm.toolkit.fluxcd.io/helmreleases/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "6f6121f6b4998dea",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/helm.toolkit.fluxcd.io/helmreleases/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:receivers.notification.toolkit.fluxcd.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "6f7023ea0fca8afb",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T17:27:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "receivers.notification.toolkit.fluxcd.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/volumeattachments/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "6fd34dd833c2e5bd",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:50:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/volumeattachments/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:clusterroles.rbac.authorization.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "7019df18472cd692",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "clusterroles.rbac.authorization.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/csistoragecapacities/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "71186bf66cf1c211",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/csistoragecapacities/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/image.toolkit.fluxcd.io/imagerepositories/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "71b54000d705905a",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:47:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/image.toolkit.fluxcd.io/imagerepositories/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/acme.cert-manager.io/challenges/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "72f57310acbc9c60",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:54:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/acme.cert-manager.io/challenges/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/opentelemetry.io/instrumentations/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "7303b15f5c11c176",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:54:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/opentelemetry.io/instrumentations/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/apiregistration.k8s.io/apiservices/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "7327e8cc6afc1a8b",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:50:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/apiregistration.k8s.io/apiservices/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:scrapeconfigs.monitoring.coreos.com]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "73c517735b5ca4b5",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "scrapeconfigs.monitoring.coreos.com"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:helmrepositories.source.toolkit.fluxcd.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "75928679998ed9fd",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:47:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "helmrepositories.source.toolkit.fluxcd.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:grafanadatasources.grafana.integreatly.org]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "759a480ab5e2c1f6",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.599Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "grafanadatasources.grafana.integreatly.org"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:events]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "75d2afeeca0b92c9",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:49:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "events"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:ocirepositories.source.toolkit.fluxcd.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "763ac0c3877d76d6",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "ocirepositories.source.toolkit.fluxcd.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:podmonitors.monitoring.coreos.com]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "78d864e0cda49b38",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:53:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "podmonitors.monitoring.coreos.com"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/image.toolkit.fluxcd.io/imagepolicies/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "797813ad02ced474",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:47:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/image.toolkit.fluxcd.io/imagepolicies/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/external-secrets.io/secretstores/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "7ac1438002203eb9",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:53:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/external-secrets.io/secretstores/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:update region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:events]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "7ae1184d3a8a073e",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:49:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "update",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "events"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:serviceaccounts]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "7d27ab8136868d9d",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "serviceaccounts"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:buckets.source.toolkit.fluxcd.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "7d5541795e5e07f8",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:47:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "buckets.source.toolkit.fluxcd.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/security.istio.io/requestauthentications/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "7f280eedb7bd6b2a",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.599Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/security.istio.io/requestauthentications/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/poddisruptionbudgets/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "7f3fffcd2bc5bfc3",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/poddisruptionbudgets/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/rolebindings/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "7f6a3fdfdcaf6e41",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/rolebindings/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/monitoring.coreos.com/prometheuses/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "822bd2393b8a00b8",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:54:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/monitoring.coreos.com/prometheuses/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:certificates.cert-manager.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "83223767175e92da",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "certificates.cert-manager.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/grafana.integreatly.org/grafanafolders/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "8379d62aaf3417db",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:49:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.592Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/grafana.integreatly.org/grafanafolders/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/serviceaccounts/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "84afba4417401fca",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/serviceaccounts/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:requestauthentications.security.istio.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "860ed93fc82e2494",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "requestauthentications.security.istio.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:update region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:validatingwebhookconfigurations.admissionregistration.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "8675458bb18241f6",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "update",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "validatingwebhookconfigurations.admissionregistration.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:envoyfilters.networking.istio.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "868962d7a6f1f940",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "envoyfilters.networking.istio.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/roles/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "86964e0e56b02f40",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:50:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.599Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/roles/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/namespaces/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "86c6462b3f465303",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:50:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/namespaces/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:servicenodeportallocations]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "892eb6d3882e454b",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "servicenodeportallocations"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:probes.monitoring.coreos.com]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "893cac2878a84a3f",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "probes.monitoring.coreos.com"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:update region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:pods]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "89ebf31381b829a9",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T16:02:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "update",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "pods"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/cert-manager.io/certificaterequests/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "8aed597790644af5",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:54:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/cert-manager.io/certificaterequests/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:clusterrolebindings.rbac.authorization.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "8bbf08d77c876a61",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "clusterrolebindings.rbac.authorization.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:apiServerIPInfo]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "8bd39909292cb7ae",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "apiServerIPInfo"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:nodes]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "8e78c4affc612efb",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:51:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "nodes"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/ingressclasses/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "8f05493348a32776",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/ingressclasses/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/monitoring.coreos.com/prometheusrules/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "8fb7ced052bd68e3",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:54:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/monitoring.coreos.com/prometheusrules/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:flowschemas.flowcontrol.apiserver.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "8fc71f0cfb71cc00",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "flowschemas.flowcontrol.apiserver.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/networking.k8s.aws/policyendpoints/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "9023685c69ad7363",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:54:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/networking.k8s.aws/policyendpoints/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/limitranges/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "90dc2979c71653d8",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:50:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/limitranges/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:prioritylevelconfigurations.flowcontrol.apiserver.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "9258140e0799e515",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "prioritylevelconfigurations.flowcontrol.apiserver.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:httproutes.gateway.networking.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "926f7f824ddd3674",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "httproutes.gateway.networking.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/networkpolicies/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "92856fda5220e871",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.592Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/networkpolicies/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/acme.cert-manager.io/challenges/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "92cd07da7d91fe08",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:53:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/acme.cert-manager.io/challenges/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:mutatingwebhookconfigurations.admissionregistration.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "94d6a5826c738b59",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "mutatingwebhookconfigurations.admissionregistration.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/pods/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "94d83bca65cacd3f",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/pods/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/gateway.networking.k8s.io/gateways/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "94def15ab494832b",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/gateway.networking.k8s.io/gateways/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:prometheuses.monitoring.coreos.com]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "954465d42c9f7fb6",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "prometheuses.monitoring.coreos.com"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/networking.istio.io/proxyconfigs/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "95a61b44f9c4228b",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:54:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.599Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/networking.istio.io/proxyconfigs/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/configmaps/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "9628c434f61b5b76",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:50:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/configmaps/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/mutatingwebhookconfigurations/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "967c4f50edb6d6f0",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/mutatingwebhookconfigurations/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/opentelemetry.io/instrumentations/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "97fc83c9b77fb76e",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:53:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.592Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/opentelemetry.io/instrumentations/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:prioritylevelconfigurations.flowcontrol.apiserver.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "980b68cbb4d7b9e1",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "prioritylevelconfigurations.flowcontrol.apiserver.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/pods/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "9825f5f8f8823867",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:50:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/pods/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:clusterroles.rbac.authorization.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "9845f967c1b44ba2",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.599Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "clusterroles.rbac.authorization.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/priorityclasses/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "98607114bc9f6cb5",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:50:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/priorityclasses/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:providers.notification.toolkit.fluxcd.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "98b4f098e0debbcb",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.599Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "providers.notification.toolkit.fluxcd.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:clustersecretstores.external-secrets.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "99294d6cc2e66293",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:53:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "clustersecretstores.external-secrets.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/external-secrets.io/clustersecretstores/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "9945bc93b3a0d1b9",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/external-secrets.io/clustersecretstores/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:update region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:kustomizations.kustomize.toolkit.fluxcd.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "99c561b0fcf2d830",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:53:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "update",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "kustomizations.kustomize.toolkit.fluxcd.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:challenges.acme.cert-manager.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "9a862797c1b1ff92",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "challenges.acme.cert-manager.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:priorityclasses.scheduling.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "9ab34bb5ae55cfe8",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "priorityclasses.scheduling.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/source.toolkit.fluxcd.io/buckets/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "9b403640c3ee274e",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:47:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/source.toolkit.fluxcd.io/buckets/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:servicemonitors.monitoring.coreos.com]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "9b8c92f19e6e3fc8",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:53:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "servicemonitors.monitoring.coreos.com"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/clusterrolebindings/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "9cc8e8549a88d4c1",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/clusterrolebindings/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:update region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:customresourcedefinitions.apiextensions.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "9d3696e22e96089a",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "update",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "customresourcedefinitions.apiextensions.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/grafana.integreatly.org/grafanafolders/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "9dba5a66861227f3",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:54:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/grafana.integreatly.org/grafanafolders/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/secrets/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "9dca1c0d4600a9e8",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/secrets/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/persistentvolumes/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "9ea2ce566b30002d",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.599Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/persistentvolumes/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:alertmanagerconfigs.monitoring.coreos.com]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "9fda9a47104a6fb8",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "alertmanagerconfigs.monitoring.coreos.com"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/volumeattachments/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "9ff18f9509e16a95",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/volumeattachments/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/networking.istio.io/serviceentries/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "a0351fd6c5f38e69",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/networking.istio.io/serviceentries/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:update region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:externalsecrets.external-secrets.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "a05962758c2dba7a",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T17:23:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "update",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "externalsecrets.external-secrets.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/ingressclasses/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "a07b896ddd2d4cfe",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:50:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/ingressclasses/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/cronjobs/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "a0cbafcc3254ac7b",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/cronjobs/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:imagerepositories.image.toolkit.fluxcd.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "a0d273425eb0ca56",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "imagerepositories.image.toolkit.fluxcd.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:resourcequotas]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "a0f6b48c36043e2d",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.599Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "resourcequotas"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:update region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:apiServerIPInfo]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "a13ded2611dd4f43",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "update",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "apiServerIPInfo"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:update region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:validatingwebhookconfigurations.admissionregistration.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "a27c28987bdf037e",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "update",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "validatingwebhookconfigurations.admissionregistration.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:virtualservices.networking.istio.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "a28754fd83d0f61d",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "virtualservices.networking.istio.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:leases.coordination.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "a3520648b78b0c62",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "leases.coordination.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:gitrepositories.source.toolkit.fluxcd.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "a365a2ce50ca6f7f",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "gitrepositories.source.toolkit.fluxcd.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/opentelemetry.io/opampbridges/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "a6cfc61066cba242",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:54:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/opentelemetry.io/opampbridges/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:externalsecrets.external-secrets.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "a8f15f27f364f7b7",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "externalsecrets.external-secrets.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/deployments/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "a8f1ca53d13e09f9",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/deployments/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/jobs/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "aa0b9441ab239767",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/jobs/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:create region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:events]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "aa26d31bc265c50d",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "create",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "events"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:podmonitors.monitoring.coreos.com]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "aa34a937af717544",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "podmonitors.monitoring.coreos.com"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/apiextensions.k8s.io/customresourcedefinitions/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "acddc3da411a2591",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/apiextensions.k8s.io/customresourcedefinitions/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:destinationrules.networking.istio.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "ad201678cc80b8ab",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "destinationrules.networking.istio.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/networking.istio.io/virtualservices/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "adfe9b8681f84bf3",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/networking.istio.io/virtualservices/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/vpcresources.k8s.aws/securitygrouppolicies/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "b0d0e7abb67ef5f6",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:54:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/vpcresources.k8s.aws/securitygrouppolicies/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/networking.istio.io/workloadentries/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "b107f93f750a8bc7",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.599Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/networking.istio.io/workloadentries/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:apiServerIPInfo]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "b15b1ba21bd01bb2",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "apiServerIPInfo"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/helm.toolkit.fluxcd.io/helmreleases/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "b265dc3fdef89562",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:47:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.592Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/helm.toolkit.fluxcd.io/helmreleases/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/notification.toolkit.fluxcd.io/alerts/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "b450b894df8da0a2",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T17:27:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/notification.toolkit.fluxcd.io/alerts/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:update region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:pods]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "b53ef65c59f1a6c1",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:51:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "update",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "pods"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/networking.istio.io/sidecars/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "b54a29a44a7c527c",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/networking.istio.io/sidecars/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/ingress/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "b5a6cb9371586652",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.592Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/ingress/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:kustomizations.kustomize.toolkit.fluxcd.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "b5d91839b2ce7dfb",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "kustomizations.kustomize.toolkit.fluxcd.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:wasmplugins.extensions.istio.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "b64f5da37c02e018",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "wasmplugins.extensions.istio.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:helmcharts.source.toolkit.fluxcd.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "b6a2036cee9672a4",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "helmcharts.source.toolkit.fluxcd.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/kustomize.toolkit.fluxcd.io/kustomizations/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "b7a19e782ac2db51",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/kustomize.toolkit.fluxcd.io/kustomizations/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/controllerrevisions/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "b7c1f1e10393dfef",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:50:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/controllerrevisions/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:customresourcedefinitions.apiextensions.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "b7c9478945a01fc5",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "customresourcedefinitions.apiextensions.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/leases/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "b85404e8d2244578",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:50:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/leases/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:grafanadatasources.grafana.integreatly.org]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "b9f0e7c6eb04d87a",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T18:32:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.599Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "grafanadatasources.grafana.integreatly.org"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:services]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "bac26c3da65406e6",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:53:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.592Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "services"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/prioritylevelconfigurations/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "bbb26a497efae9dc",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/prioritylevelconfigurations/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:servicemonitors.monitoring.coreos.com]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "bc3ed4108d5c802c",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "servicemonitors.monitoring.coreos.com"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/source.toolkit.fluxcd.io/gitrepositories/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "be1f997ca532ab39",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.599Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/source.toolkit.fluxcd.io/gitrepositories/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/runtimeclasses/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "be24bd4554d0c01b",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/runtimeclasses/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:delete region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:leases.coordination.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "be974ccab3f36a33",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T16:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.599Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "delete",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "leases.coordination.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/csinodes/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "bf9d4ef823eaf195",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:50:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.599Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/csinodes/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:instrumentations.opentelemetry.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "c06c0056d1d1ffd0",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "instrumentations.opentelemetry.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/source.toolkit.fluxcd.io/buckets/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "c0d29e5d6f5659b6",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/source.toolkit.fluxcd.io/buckets/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/csistoragecapacities/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "c132199de0fd5719",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/csistoragecapacities/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/security.istio.io/authorizationpolicies/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "c139a29c4a729083",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/security.istio.io/authorizationpolicies/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/opentelemetry.io/opampbridges/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "c199ff17af8276ba",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:53:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/opentelemetry.io/opampbridges/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:update region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:nodes]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "c1a4e968e58646e2",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T16:06:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.599Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "update",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "nodes"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/networkpolicies/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "c233a1108aa1d589",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:50:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/networkpolicies/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:flowschemas.flowcontrol.apiserver.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "c354842951d2b1fc",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "flowschemas.flowcontrol.apiserver.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:serviceaccounts]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "c35bcbee94722279",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "serviceaccounts"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/source.toolkit.fluxcd.io/helmcharts/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "c43177660dc2f1e6",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:47:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/source.toolkit.fluxcd.io/helmcharts/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/configmaps/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "c4d84fbf0e479dbe",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/configmaps/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:opampbridges.opentelemetry.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "c61d11193129f744",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "opampbridges.opentelemetry.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/external-secrets.io/clusterexternalsecrets/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "c6d7f80a6d9454b1",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:53:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/external-secrets.io/clusterexternalsecrets/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:leases.coordination.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "c7481fa599170112",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "leases.coordination.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/source.toolkit.fluxcd.io/gitrepositories/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "c9d6e4d907103f71",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:47:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/source.toolkit.fluxcd.io/gitrepositories/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:horizontalpodautoscalers.autoscaling]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "ca0b5604675ca193",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "horizontalpodautoscalers.autoscaling"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:helmcharts.source.toolkit.fluxcd.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "ca13d0559b5fe780",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:47:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "helmcharts.source.toolkit.fluxcd.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/telemetry.istio.io/telemetries/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "ca2f78ca69646f4a",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:54:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/telemetry.istio.io/telemetries/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:endpoints]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "ca364a1e2c4ce14e",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.592Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "endpoints"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/cert-manager.io/clusterissuers/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "ca58fe035aaeacde",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:55:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/cert-manager.io/clusterissuers/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:update region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:mutatingwebhookconfigurations.admissionregistration.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "ca6da6045f1d5402",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "update",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "mutatingwebhookconfigurations.admissionregistration.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/services/specs/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "cac6969bbd900448",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/services/specs/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:poddisruptionbudgets.policy]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "cc58035105e6a8bc",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:53:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "poddisruptionbudgets.policy"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:certificates.cert-manager.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "cd47d59f678b59ce",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.599Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "certificates.cert-manager.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:update region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:kustomizations.kustomize.toolkit.fluxcd.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "ce0a4351e277b288",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-19T00:12:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.599Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "update",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "kustomizations.kustomize.toolkit.fluxcd.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/monitoring.coreos.com/podmonitors/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "ce90043c03339710",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:53:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/monitoring.coreos.com/podmonitors/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/persistentvolumeclaims/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "d01f59355cdf19a1",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/persistentvolumeclaims/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:opentelemetrycollectors.opentelemetry.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "d06d61a74f0eeeae",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:53:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "opentelemetrycollectors.opentelemetry.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:update region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:mutatingwebhookconfigurations.admissionregistration.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "d0daacaa3534878a",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "update",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "mutatingwebhookconfigurations.admissionregistration.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:roles.rbac.authorization.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "d11b48437aa0f6ce",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "roles.rbac.authorization.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/namespaces/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "d2cc79631c20d86b",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/namespaces/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:rolebindings.rbac.authorization.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "d3263174ef4f9a35",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "rolebindings.rbac.authorization.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/minions/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "d3fed55f5638352a",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:50:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.599Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/minions/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/rolebindings/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "d46aa540fe306d59",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:50:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/rolebindings/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/storageclasses/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "d83d2341e986dac0",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/storageclasses/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/secrets/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "d8676d8a8f1bc680",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/secrets/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/image.toolkit.fluxcd.io/imagepolicies/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "d8bb622ef31c3b8c",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/image.toolkit.fluxcd.io/imagepolicies/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/controllerrevisions/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "d8df57db6a80a217",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/controllerrevisions/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/source.toolkit.fluxcd.io/ocirepositories/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "d9a3ec442bc25c0c",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:54:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/source.toolkit.fluxcd.io/ocirepositories/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:leases.coordination.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "da1b36ec50866956",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "leases.coordination.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/endpointslices/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "da44ed3b547e6309",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:50:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/endpointslices/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:customresourcedefinitions.apiextensions.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "dacb1369541f7a71",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.592Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "customresourcedefinitions.apiextensions.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:clusterissuers.cert-manager.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "db40548f33ddb520",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "clusterissuers.cert-manager.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/csinodes/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "dba9fec987ad638d",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/csinodes/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:grafanadatasources.grafana.integreatly.org]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "dc22e0f1a8eb62e6",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:47:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "grafanadatasources.grafana.integreatly.org"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/source.toolkit.fluxcd.io/helmrepositories/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "dc47287e8001b9b7",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.599Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/source.toolkit.fluxcd.io/helmrepositories/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:events]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "dc703f5425eb574d",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T16:06:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "events"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:imagepolicies.image.toolkit.fluxcd.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "dc8f13e230fea4bc",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:47:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.592Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "imagepolicies.image.toolkit.fluxcd.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/notification.toolkit.fluxcd.io/providers/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "de2d6215a2d90009",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/notification.toolkit.fluxcd.io/providers/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/extensions.istio.io/wasmplugins/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "de47f27528e62814",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:54:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.599Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/extensions.istio.io/wasmplugins/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:grafanafolders.grafana.integreatly.org]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "de6fd236a13d8c33",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "grafanafolders.grafana.integreatly.org"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:imagerepositories.image.toolkit.fluxcd.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "de87ef8d49fd5432",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:47:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "imagerepositories.image.toolkit.fluxcd.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:create region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:events]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "de93d90c789a7a11",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:47:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.592Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "create",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "events"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:endpoints]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "dfc3d6116e5a9232",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "endpoints"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/vpcresources.k8s.aws/cninodes/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "dfcc390f28b6eb6a",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:49:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.592Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/vpcresources.k8s.aws/cninodes/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/validatingwebhookconfigurations/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "e040ed8dbf4c0188",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:50:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/validatingwebhookconfigurations/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:grafanas.grafana.integreatly.org]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "e067f754d707b32f",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "grafanas.grafana.integreatly.org"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/cert-manager.io/issuers/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "e11870dbffde8c10",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:53:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/cert-manager.io/issuers/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:replicasets.apps]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "e171d7271096a3ad",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.599Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "replicasets.apps"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:clustersecretstores.external-secrets.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "e1c4acc4f3db9bbf",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:53:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "clustersecretstores.external-secrets.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/monitoring.coreos.com/thanosrulers/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "e21bcbf06d155bcc",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:54:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.599Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/monitoring.coreos.com/thanosrulers/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/networking.istio.io/gateways/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "e497aa843ea615cf",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/networking.istio.io/gateways/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/grafana.integreatly.org/grafanadashboards/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "e4ae0610abf49a5b",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:49:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/grafana.integreatly.org/grafanadashboards/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/minions/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "e4f1f806bcddd042",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/minions/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:endpointslices.discovery.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "e54274f6007551f2",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "endpointslices.discovery.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:secretstores.external-secrets.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "e73ea07a1f4b56d7",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "secretstores.external-secrets.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/monitoring.coreos.com/alertmanagers/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "e743283db7e6a716",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:54:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/monitoring.coreos.com/alertmanagers/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:pods]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "e86eedbf4e451f5e",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:51:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "pods"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/horizontalpodautoscalers/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "e909b9daf10971ee",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/horizontalpodautoscalers/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:nodes]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "e99ce2c13b3948a7",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:47:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "nodes"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/poddisruptionbudgets/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "ea8dc23b8d7b2a6b",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/poddisruptionbudgets/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/controllers/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "eb2d73edd13addf0",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/controllers/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/certificatesigningrequests/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "ec3a5babe2ba752b",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:50:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/certificatesigningrequests/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/monitoring.coreos.com/probes/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "ec6b428bb1bbab67",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:54:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/monitoring.coreos.com/probes/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/grafana.integreatly.org/grafanadatasources/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "ec8c7fbef9db3010",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:54:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/grafana.integreatly.org/grafanadatasources/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:imagepolicies.image.toolkit.fluxcd.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "edc9c143db78a3b0",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "imagepolicies.image.toolkit.fluxcd.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/resourcequotas/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "ee69d43864df45ca",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/resourcequotas/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/statefulsets/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "ef53afc1c993a87e",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/statefulsets/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:buckets.source.toolkit.fluxcd.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "f0ae6d3a5bebb6cc",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "buckets.source.toolkit.fluxcd.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/clusterroles/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "f10e963582d1f218",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/clusterroles/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/controllers/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "f31e70aa6bc76668",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/controllers/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:certificaterequests.cert-manager.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "f34235debc7e5c93",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "certificaterequests.cert-manager.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/cert-manager.io/certificates/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "f403eaeba04d1574",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:54:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/cert-manager.io/certificates/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/jobs/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "f4248d1fa69ded1f",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:50:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/jobs/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/image.toolkit.fluxcd.io/imageupdateautomations/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "f48d31214580cfd1",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:49:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/image.toolkit.fluxcd.io/imageupdateautomations/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:helmreleases.helm.toolkit.fluxcd.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "f4de072fd438843c",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "helmreleases.helm.toolkit.fluxcd.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:serviceipallocations]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "f5b0ec4950c0a7f1",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "serviceipallocations"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/grafana.integreatly.org/grafanas/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "f67c2f58acba3b4f",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:49:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/grafana.integreatly.org/grafanas/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/image.toolkit.fluxcd.io/imagerepositories/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "f79b6394a1db2592",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.599Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/image.toolkit.fluxcd.io/imagerepositories/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:rolebindings.rbac.authorization.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "f7ca72b74e6a76e1",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "rolebindings.rbac.authorization.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/acme.cert-manager.io/orders/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "f81abfa9fb13a993",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:54:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/acme.cert-manager.io/orders/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:roles.rbac.authorization.k8s.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "f8c7c8c530113aaa",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.592Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "roles.rbac.authorization.k8s.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/statefulsets/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "f8f2f3b7bac6dd86",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.594Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/statefulsets/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:/registry/networking.istio.io/envoyfilters/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "f9072b94ca42e2f6",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:54:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.599Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/networking.istio.io/envoyfilters/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:nodes]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "f9a6d060899c7df7",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "nodes"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:list region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:clusterexternalsecrets.external-secrets.io]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "f9ad05bc98dc371f",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:52:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "list",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "clusterexternalsecrets.external-secrets.io"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:daemonsets.apps]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "faae69ae64e3361f",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "daemonsets.apps"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/leases/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "fc45ad741008acd0",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/leases/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/cert-manager.io/certificates/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "fd8842de08eb210c",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:49:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/cert-manager.io/certificates/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:deployments.apps]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "fdc69a3f45dea7d0",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:43:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.587Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "deployments.apps"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/events/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "fde73849c7704fc6",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/events/"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.10.156:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.10.156 net_host_port:443 operation:update region:eu-central-1 service_instance_id:10.0.10.156:443 service_name:apiserver type:apiServerIPInfo]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:20:41.513Z",
          "fingerprint": "fe549cfd6e135cdb",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:48:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:16:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.10.156:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.10.156",
              "net_host_port": "443",
              "operation": "update",
              "region": "eu-central-1",
              "service_instance_id": "10.0.10.156:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "apiServerIPInfo"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:get region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:grafanadashboards.grafana.integreatly.org]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "fee273f47666088d",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:47:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.580Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "get",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "grafanadashboards.grafana.integreatly.org"
          }
      },
      {
          "annotations": {
              "description": "map[__name__:etcd_request_duration_seconds_bucket account_id:339743103717 cluster:eks-cluster-with-vpc http_scheme:https instance:10.0.11.135:443 job:apiserver k8s_namespace_name:default le:+Inf net_host_name:10.0.11.135 net_host_port:443 operation:listWithCount region:eu-central-1 service_instance_id:10.0.11.135:443 service_name:apiserver type:/registry/serviceaccounts/]",
              "summary": "alert with high card metric "
          },
          "endsAt": "2025-03-20T09:19:41.513Z",
          "fingerprint": "ff71c6741bd9f412",
          "receivers": [
              {
                  "name": "default"
              }
          ],
          "startsAt": "2025-03-18T15:41:41.513Z",
          "status": {
              "inhibitedBy": [],
              "mutedBy": [],
              "silencedBy": [],
              "state": "active"
          },
          "updatedAt": "2025-03-20T09:15:41.592Z",
          "generatorURL": "/graph?g0.expr=etcd_request_duration_seconds_bucket%7Ble%3D%22%2BInf%22%7D+%3E+1&g0.tab=1",
          "labels": {
              "account_id": "339743103717",
              "alertname": "EtcdAlertExample",
              "cluster": "eks-cluster-with-vpc",
              "http_scheme": "https",
              "instance": "10.0.11.135:443",
              "job": "apiserver",
              "k8s_namespace_name": "default",
              "le": "+Inf",
              "net_host_name": "10.0.11.135",
              "net_host_port": "443",
              "operation": "listWithCount",
              "region": "eu-central-1",
              "service_instance_id": "10.0.11.135:443",
              "service_name": "apiserver",
              "severity": "warning",
              "type": "/registry/serviceaccounts/"
          }
      }
  ],
  "labels": {
      "alertname": "EtcdAlertExample"
  },
  "receiver": {
      "name": "default"
  }
}];