export async function tasksList() {
  // TODO: Hardcoded URL
  return fetch('http://localhost:3000/tasks/list').then((res) => res.json());
  // TODO: Error handling
}

export async function taskCreate(location, definition) {
  // TODO: Hardcoded URL
  return fetch(`http://localhost:3000/tasks/create/${location}/${definition}`, {
    method: 'POST',
  }).then((res) => res.json());
  // TODO: Error handling
}

export async function taskAssign(id, assignee) {
  // TODO: Hardcoded URL
  return fetch(`http://localhost:3000/tasks/${id}/assign/${assignee}`, {
    method: 'PUT',
  }).then((res) => res.json());
  // TODO: Error handling
}

export async function taskProgress(id) {
  // TODO: Hardcoded URL
  return fetch(`http://localhost:3000/tasks/${id}/progress`, {
    method: 'PUT',
  }).then((res) => res.json());
  // TODO: Error handling
}

export async function taskRegress(id) {
  // TODO: Hardcoded URL
  return fetch(`http://localhost:3000/tasks/${id}/regress`, {
    method: 'PUT',
  }).then((res) => res.json());
  // TODO: Error handling
}

export async function locationsList() {
  // TODO: Hardcoded URL
  return fetch('http://localhost:3000/locations/list').then((res) => res.json());
  // TODO: Error handling
}

export async function taskDefinitionsList() {
  // TODO: Hardcoded URL
  return fetch('http://localhost:3000/task-definitions/list').then((res) => res.json());
  // TODO: Error handling
}

export async function personsList() {
  // TODO: Hardcoded URL
  return fetch('http://localhost:3000/persons/list').then((res) => res.json());
  // TODO: Error handling
}
