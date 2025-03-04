# Example output

```bash
(base) ┌──(klx㉿kali)-[~/compose-secrets] (main)
└─$ docker compose up -d     
[+] Running 2/2
 ✔ Network compose-secrets_default  Created   0.1s 
 ✔ Container compose-secrets-app-1  Started   0.2s 

(base) ┌──(klx㉿kali)-[~/compose-secrets] (main)
└─$ docker exec -it compose-secrets-app-1 pwd
/app

(base) ┌──(klx㉿kali)-[~/compose-secrets] (main)
└─$ docker exec -it compose-secrets-app-1 ls /run
adduser  lock  secrets

(base) ┌──(klx㉿kali)-[~/compose-secrets] (main)
└─$ docker exec -it compose-secrets-app-1 ls /run/secrets
db_root_password

(base) ┌──(klx㉿kali)-[~/compose-secrets] (main)
└─$ docker exec -it compose-secrets-app-1 cat /run/secrets/db_root_password
root_abcd_1234   

(base) ┌──(klx㉿kali)-[~/compose-secrets] (main)
└─$ docker exec -it compose-secrets-app-1 ls -l /run/secrets/db_root_password
-rw-rw-r-- 1 node node 14 Mar  4 00:30 /run/secrets/db_root_password

(base) ┌──(klx㉿kali)-[~/compose-secrets] (main)
└─$ docker exec -it compose-secrets-app-1 curl localhost:3000/login
root_abcd_1234                                                                        

(base) ┌──(klx㉿kali)-[~/compose-secrets] (main)
└─$ docker exec -it compose-secrets-app-1 curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d '{"password": "random_password"}'
Login fail!                                                                                                                               

(base) ┌──(klx㉿kali)-[~/compose-secrets] (main)
└─$ docker exec -it compose-secrets-app-1 curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d '{"password": "root_abcd_1234"}' 
Login success!                                                                                                                            

(base) ┌──(klx㉿kali)-[~/compose-secrets] (main)
└─$ 

(base) ┌──(klx㉿kali)-[~/compose-secrets] (main)
└─$ docker compose down
[+] Running 2/2
 ✔ Container compose-secrets-app-1  Removed   0.3s
 ✔ Network compose-secrets_default  Removed   0.4s

(base) ┌──(klx㉿kali)-[~/compose-secrets] (main)
└─$ docker compose down
```