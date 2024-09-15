# prerequisites
```code
export WORKSPACE='/mnt/c/temp/delete/Ansible/workspace'
```
# upload sourcemaps
```code
cd /mnt/c/xxxxxx/ansible/uploadsourcemaps
ansible-playbook deploy-dev.yml -i ./inventory/dev.yaml
```


# host initialization
## opcion0:
 - la que esta en uso,usar todo el rato la misma carpeta
## opcion0.1:
 - usar la misma carpeta, pero declarar remotedir a nivel de host

- modificar inventory


- modificar playbooks


# clean workspace
```code
cd /mnt/c/temp/delete/Ansible/workspace
rm ./source-bpmf/* -R
rmdir source-bpmf
```