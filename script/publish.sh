docker_tag="0.1.1"
gcp_project="headoffice"
docker_image_name="head-office-image"
gcp_artifact_registry_name="registry"

# run commands
docker build . -t europe-west1-docker.pkg.dev/${gcp_project}/${gcp_artifact_registry_name}/${docker_image_name}:${docker_tag}
docker push europe-west1-docker.pkg.dev/${gcp_project}/${gcp_artifact_registry_name}/${docker_image_name}:${docker_tag}