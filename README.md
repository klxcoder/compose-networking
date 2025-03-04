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
└─$ 
```