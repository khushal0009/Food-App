const userModel = require("../models/userModel");

// module.exports.getUser = async function getUser(req, res) {
//     try {
//       let id = req.params.id; // Corrected: use req.params.id to get the user ID from the route parameters.
//       let user = await userModel.findById(id);
//       if (user) {
//         return res.json(user);
//       } else {0
//         return res.json({
//           message: "User not found",
//         });
//       }
//     } catch (err) {
//       return res.status(500).json({ message: err.message }); // Added error handling with 500 status code.
//     }
//   };
  
//   module.exports.updateUser = async function updateUser(req, res) {
//     try {
//       let id = req.params.id;
//       let user = await userModel.findById(id);
//       if (!user) {
//         return res.json({
//           message: "User not found",
//         });
//       }
  
//       let dataToBeUpdated = req.body;
//       for (let key in dataToBeUpdated) {
//         if (dataToBeUpdated.hasOwnProperty(key)) {
//           // Added a check to only update existing properties in the user object.
//           user[key] = dataToBeUpdated[key];
//         }
//       }
  
//       const updatedData = await user.save();
//       return res.json({
//         message: "Data updated successfully",
//         data: updatedData,
//       });
//     } catch (err) {
//       return res.status(500).json({ message: err.message });
//     }
//   };