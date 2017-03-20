import R from 'ramda';

const epurStr = R.compose(R.replace(/\s{2,}/g, ' '), R.trim);

// const fields = {
//   name: {
//     key: 'name',
//     label: 'Mr/Mrs',
//     rules: [
//       { required: true },
//     ],
//     validateTrigger: 'onBlur',
//   },
//   content: {
//     key: 'content',
//     label: 'Subject',
//     rules: [
//       { required: true },
//     ],
//     validateTrigger: 'onBlur',
//   },
// };

// export default fields;


// ===> name ===>requiered
// ===> subject ===> requiered
// ===> tags      _
// ===> mail ===== ]\ one requiered
// ===> tel  =====_]/ --------------

