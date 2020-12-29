export const findProject = (projects = [], projectId) =>
projects.find((project) => project.id === projectId);
