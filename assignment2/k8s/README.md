ROLLING UPDATE
Every deployment creates a replicaset which manages the count of the pods.One replicaset cannot have a pod with two different versions of image i.e it can have a single type of pod. Therefore, when we apply a rolling update then the deployment creates a new replicaset and increases the count of pods in it and at the same time decreases the count of pods in the previous replicaset. The previous replicaset is not deleted as it can be helpful to rollback to a previous stable version.

To perform a rolling update there are two ways:
1) Use "kubectl apply" command on a deployment.
   Update the deployment file to the required image version and then apply the changes to kubernetes.
    eg: $ kubectl apply -f deployment.yaml

2) Use imperative command: 
    $ kubectl set image deployment/nginx-deployment nginx-dep=parthgupta13/a1-nginx-dep:v2.0


We can check the history of the rolling update by:
 $ kubectl rollout history deployment nginx-deployment 

We can get more information about the rolling update by:
 $ kubectl rollout history deployment nginx-deployment --revision=1




ROLLBACK
In case we want to rollback to a previous version we can use the command:
 $ kubectl rollout undo deployment nginx-deployment --to-revision=1