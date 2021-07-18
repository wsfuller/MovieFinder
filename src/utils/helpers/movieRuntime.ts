/** returns hour and minute runtime format #h ##m Example: 93 runtime minutes returns 1h 33m */
const formatMovieRuntime = (minutes: number): string => {
  let movieRuntime = '';

  if (minutes > 60) {
    const runtimeHours = Math.floor(minutes / 60);
    const runtimeMinutes = minutes - runtimeHours * 60;

    if (runtimeHours > 0) {
      movieRuntime += `${runtimeHours}h`;
    }

    if (runtimeMinutes > 0) {
      movieRuntime += ` ${runtimeMinutes}m`;
    }
  } else {
    movieRuntime = `${minutes}m`;
  }

  return movieRuntime;
};

export default formatMovieRuntime;
