const mapStateToProps = (...propList) => (state) => {
  const props = {};
  Object.keys(state).forEach((property) => {
    if (propList.indexOf(property) !== -1) {
      props[property] = state[property];
    }
  });
  return props;
};

// const mapDispatchToProps = (...actionsList) => (
//   dispatch => (
//     Object.assign(
//       ...actionsList.map(actions => (
//         Object.assign(
//           ...Object.keys(actions).map(actionName => (
//             { [actionName]: dispatch(actions[actionName]) }
//           ))
//         )
//       ))
//     )
//   )
// );

export {
  mapStateToProps
  // mapDispatchToProps
};
