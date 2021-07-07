const Skill = require('../models/skill');

module.exports = {
	index,
	show,
	new: newSkill,
	create,
	delete: deleteSkill,
	edit: editSkill,
	update: updateSkill
};

function index(req, res, next) {
	res.render('skills/index', {
		skills: Skill.getAll(),
		time: req.time
	});
}

function show(req, res) {
	res.render('skills/show', {
		skill: Skill.getOne(req.params.id),
		skillNum: parseInt(req.params.id) + 1
	});
}

function newSkill(req, res) {
	res.render('skills/new')
}

function create(req, res) {
	req.body.done = false;
	Skill.create(req.body);
	res.redirect('/skills')
}

function deleteSkill(req, res) {
	Skill.deleteOne(req.params.id);
	res.redirect('/skills');
}

function editSkill(req, res) {
	res.render("skills/edit", {
	  idx: req.params.id,
	  skill: Skill.getOne(req.params.id)
	});
  }
  
  function updateSkill(req, res) {
	Skill.update(req.body, req.params.id);
	res.redirect('/skills')
  }