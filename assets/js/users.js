document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});


  const ADDUSERBTN = document.getElementById('add_user_buttom')
  ADDUSERBTN.addEventListener('click',()=>{
      document.querySelector('.add_user_model').classList.add('show')
      document.querySelector('.add_user_modal_back').classList.remove('dis-none')
  })

  document.querySelector('.add_user_modal_back').addEventListener('click',()=>{
    document.querySelector('.add_user_model').classList.remove('show')
    document.querySelector('.add_user_modal_back').classList.add('dis-none')
  })


  });
  