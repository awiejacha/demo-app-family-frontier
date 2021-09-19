import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { locationsList, personsList, taskDefinitionsList, tasksList } from '../services/api';
import locationsStore from '../stores/locations';
import personsStore from '../stores/persons';
import taskDefinitionsStore from '../stores/task-definitions';
import tasksStore from '../stores/tasks';
import TasksTable from './TasksTable';

export default function AppContainer() {
  const setLocations = useRecoilState(locationsStore)[1];
  const setPersons = useRecoilState(personsStore)[1];
  const setTaskDefinitions = useRecoilState(taskDefinitionsStore)[1];
  const setTasks = useRecoilState(tasksStore)[1];
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    Promise.all([tasksList(), locationsList(), taskDefinitionsList(), personsList()]).then(
      ([fetchedTasksList, fetchedLocationsList, fetchedTaskDefinitionsList, fetchedPersonsList]) => {
        setLocations(fetchedLocationsList);
        setPersons(fetchedPersonsList);
        setTaskDefinitions(fetchedTaskDefinitionsList);
        const listedTasks = {};
        fetchedTasksList.forEach((task) => {
          listedTasks[task.id] = task;
        });
        setTasks(listedTasks);
        setIsLoaded(true);
      }
    );
  }, [setTasks, setLocations, setTaskDefinitions, setPersons]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <TasksTable />
    </div>
  );
}
