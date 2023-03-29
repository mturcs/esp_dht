// contactController.js
// eslint-disable-next-line
// Import contact model
Contact = require("../models/contact.model");

exports.index = (req, res) => {
  Contact.get((err, contacts) => {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Contacts retrieved successfully",
      data: contacts
    });
  });
};

// Handle create user actions
exports.new = (req, res) => {
  Contact.find({ mobile: req.body.mobile.trim() }, (err, contacts) => {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    if (contacts && contacts.length > 0) {
      res.status(400).send({
        status: "error",
        message: req.body.firstName + " is already exist"
      });
    } else {
      // eslint-disable-next-line
      var contact = new Contact();
      var contactObj = req.body;
      Object.keys(contactObj).forEach((key, index) => {
        contact[key] = contactObj[key];
      });

      // save the contact and check for errors
      // eslint-disable-next-line
      contact.save(err => {
        if (err) {
          res.status(400).json({
            status: "error",
            error: err
          });
        }
        res.json({
          message: "New contact created!",
          data: contact
        });
      });
    }
  });

  // Handle view contact info
  exports.view = (req, res) => {
    Contact.findById(req.params.contact_id, (err, contact) => {
      if (err) {
        res.status(400).json({
          status: "error",
          error: err
        });
      }
      res.json({
        message: "Contact details loading..",
        data: contact
      });
    });
  };
  // Handle update contact info
  exports.update = (req, res) => {
    Contact.findByIdAndUpdate(
      req.params.contact_id,
      req.body,
      { new: true },
      (err, contact) => {
        if (err) {
          res.status(400).json({
            status: "error",
            error: err
          });
        }

        // save the contact and check for errors
        contact.save(err => {
          if (err) res.json(err);
          res.json({
            message: "Contact Info updated",
            data: contact
          });
        });
      }
    );
  };
  // Handle delete state
  exports.delete = (req, res) => {
    Contact.remove(
      {
        _id: req.params.contact_id
      },
      (err, state) => {
        if (err) {
          res.status(400).json({
            status: "error",
            error: err
          });
        }
        res.json({
          status: "success",
          message: "Contact deleted"
        });
      }
    );
  };
};
// Handle view state info
exports.view = (req, res) => {
  Contact.findById(req.params.contact_id, (err, contact) => {
    if (err) {
      res.status(400).json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "contact details loading..",
      data: contact
    });
  });
};
// Handle update state info
exports.update = (req, res) => {
  Contact.findByIdAndUpdate(
    req.params.contact_id,
    req.body,
    { new: true },
    (err, contact) => {
      if (err) {
        res.status(400).json({
          status: "error",
          error: err
        });
      }

      // save the contact and check for errors
      contact.save(err => {
        if (err) res.json(err);
        res.json({
          message: "contact Info updated",
          data: contact
        });
      });
    }
  );
};
// Handle delete state
exports.delete = (req, res) => {
  Contact.remove(
    {
      _id: req.params.contact_id
    },
    (err, contact) => {
      if (err) {
        res.status(400).json({
          status: "error",
          error: err
        });
      }
      res.json({
        status: "success",
        message: "contact deleted"
      });
    }
  );
};
