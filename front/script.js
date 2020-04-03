let user = {
  name: 'Admin',
  isAdmin: true
};

function main() {
  addEditButton();
  testJson();
}

/* Functions */

function addEditButton() {
  if (isAdmin(user)) {
    let div = document.createElement('button');
    div.className = 'edit';
    div.innerHTML = 'Изменить';

    div.style.width = '100px';
    div.style.height = '26px';

    div.style.border = 'none';
    div.style.borderRadius = '6px';
    div.style.fontSize = '18px';
    div.style.color = 'white';
    div.style.background = 'dimgray';
    div.style.cursor = 'pointer';
    div.style.fontFamily = 'sans-serif';

    div.style.marginTop = '12px';

    div.style.float = 'left';

    document.getElementsByClassName('content')[0].append(div);
    }
}

function testJson() {
  let response = fetch(test.json);

  let temp = response.json();

  alert(temp[0].name);
}

function isAdmin(object) {
  return object.isAdmin;
}
