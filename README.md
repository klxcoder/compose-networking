# Service `node` can reach service `app`

```bash
(base) ┌──(klx㉿kali)-[~/compose-networking] (main)
└─$ docker compose up -d
[+] Running 3/3
 ✔ Network compose-networking_default   Created     0.1s 
 ✔ Container compose-networking-node-1  Started     0.3s 
 ✔ Container compose-networking-app-1   Started     0.3s 

(base) ┌──(klx㉿kali)-[~/compose-networking] (main)
└─$ docker exec -it compose-networking-node-1 curl app:3000
Hello from non-root container

(base) ┌──(klx㉿kali)-[~/compose-networking] (main)
└─$ docker exec -it compose-networking-node-1 curl express:3000
Hello from non-root container
```

# Note: Do not use multiple networks inside compose.yaml

- Or you will have error below: `Error response from daemon: failed to create task for container: failed to create shim task: OCI runtime create failed: runc create failed: unable to start container process: error during container init: error running hook #0: error running hook: exit status 1, stdout: , stderr: failed to add interface veth4f73e46 to sandbox: error setting interface "veth4f73e46" IP to 192.168.200.2/24: cannot program address 192.168.200.2/24 in sandbox interface because it conflicts with existing route {Ifindex: 125 Dst: 0.0.0.0/0 Src: <nil> Gw: 192.168.100.1 Flags: [] Table: 254 Realm: 0}: unknown`