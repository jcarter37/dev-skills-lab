const skills = [
    {skill: 'Snowboarding', done: true},
    {skill: 'Understand Express', done: false},
    {skill: 'Finish Browser Game War', done: true}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    return skills[id]
  }

  function create(skill) {
    skills.push(skill);
  }

function deleteOne(id) {
  skills.splice(id, 1);
}

function update(skill, id) {
  skills[id].skill = skill.skill
  skills[id].done = skill.check
}