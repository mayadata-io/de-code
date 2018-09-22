import Controller from '@ember/controller';

export default Controller.extend({
  command: 'oc label node --all "app=maya-io-agent" --overwrite && oc adm policy add-scc-to-user privileged system:serviceaccount:maya-system:maya-io && oc apply -f https://app.mayaonline.io/v3/scripts/F8400B7A88CE685986E4:1514678400000:d0shjVGEmpDAxu0vwOkjjtX4QOc.oc.yaml',
  commandLarge:'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCwPES8mnOpkGrGfqMVf0ovB1CwRPLc4IE36efzbF/cDl93WYJcFQbXSxCaQUWxl8i92zFxAv/9AZscdkTekBaqcdL8IpnjVAri+8RbFjfbd+6/ho2ZLgOSWKdfkzkmL0efWO5MdO49HY52R1/4f/b+sCBjzuMHnR+iiUAnHTN3aHLnW9IZO55sGdH2zLtlXOt1uEv0tqdj3lnU/Y0fiRq4S2A6BotmzFZB75NELhoSswkMHraxBfF1vgVFrbcxR+yLPZB8mwrxVDBhyazyxmBunAIyAjV7ZZNJ0l84C+3aCTr30Aix8weqbefGol76pQQC1PZvq+EbmIDYTINqzcZX mayaonline'
});
