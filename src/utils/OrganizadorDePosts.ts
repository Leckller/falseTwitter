/* eslint-disable react-func/max-lines-per-function */
import { PostsType } from '../types';

// "[["Mon","Nov","27","2023"],"20:44:30"]"
// "2024-08-30T21:26:41.910Z"
// ['"2024-08-30', '21:26:41.910Z"']
const organizador = (ps: PostsType[]) => {
  console.log();
  return ps.sort((a, b) => {
    const atime = a.data.split('T');
    const ahorario = atime[1].slice(0, 8).split(':');
    const ahora = +ahorario[0];
    const amin = +ahorario[1];

    const acalendario = atime[0].split('-');
    const aano = +acalendario[0];
    const ames = +acalendario[1];
    const adia = +acalendario[2];

    // next
    const btime = b.data.split('T');
    const bhorario = btime[1].slice(0, 8).split(':');
    const bhora = +bhorario[0];
    const bmin = +bhorario[1];

    const bcalendario = btime[0].split('-');
    const bano = +bcalendario[0];
    const bmes = +bcalendario[1];
    const bdia = +bcalendario[2];

    if (bano > aano) {
      console.log('ano');
      return 1;
    }
    if (aano > bano) {
      return -1;
    }
    if (bmes > ames) {
      console.log('mes');
      return 1;
    }
    if (ames > bmes) {
      return -1;
    }
    if (bdia > adia) {
      console.log('dia');
      return 1;
    }
    if (adia > bdia) {
      return -1;
    }
    if (ahora > bhora) {
      return -1;
    }
    if (bhora > ahora) {
      console.log('hora');
      return 1;
    }
    if (amin > bmin) {
      return -1;
    }
    if (bmin > amin) {
      console.log('min');
      return 1;
    }

    return 0;
  });
};

export default organizador;
