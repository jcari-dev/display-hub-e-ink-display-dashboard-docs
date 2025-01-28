---
sidebar_position: 4
---

# Troubleshooting

Below you will find troubleshooting steps for a common issue that might be encountered.

### Permissions

- **Docker**:
  - **Error**:
    ```bash
    unable to get image 'display-hub-e-ink-display-dashboard-frontend': permission denied
    while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock:
    Get "http://%2Fvar%2Frun%2Fdocker.sock/v1.47/images/display-hub-e-ink-display-dashboard-frontend/json":
    dial unix /var/run/docker.sock: connect: permission denied
    ```

  - **Solution**:
    1. **Add Your User to the Docker Group**:
       Run the following command to grant your user the necessary permissions to access Docker without requiring `sudo`:
       ```bash
       sudo usermod -aG docker $USER
       ```

       - **What this does**: The `usermod -aG` command adds your user (`$USER`) to the specified group (`docker`) without removing them from any other groups. The `-a` flag ensures the user is appended to the group, and `-G` specifies the group to modify.
       - **Why it fixes the issue**: By default, the Docker daemon (`/var/run/docker.sock`) is owned by the `docker` group. Adding your user to this group allows non-root access to the daemon.
       - **Implications**: Adding a user to the `docker` **group grants them root-equivalent permissions over Docker.**

    2. **Log Out and Log Back In**:
       After adding your user to the Docker group, log out of your session and log back in for the changes to take effect. Alternatively, you can restart the Raspberry Pi.

    3. **Verify Docker Access**:
       Test if Docker is accessible without `sudo`:
       ```bash
       docker ps
       ```
       If the command runs successfully and lists running containers, the issue is resolved.
  - **Improvements**: A solution is currently being explored to avoid making docker part of that group.
