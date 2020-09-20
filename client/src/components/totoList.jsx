
import React from "react";

function todoList(){
    
    return (
     
        <div>
    <div class="box" id="heading">
    <h1> {listTitle}  </h1>
    </div>

    <div class="box">

    (newListItems.forEach(function(item){ 

    <form action="/delete" method="post">
    <div class="item">
        <input name="checkbox" value="<%= item._id %>" type="checkbox" onChange="this.form.submit()" />
        <p>  {item.name}  </p>
    </div>
    <input type="hidden" name="listName" value="<%= listTitle %>" /></form>
    }));


    <form class="item" action="/" method="post">
        <input type="text" name="newItem" placeholder="New Item" autocomplete="off" />
        <button type="submit" name="list" value ="<%= listTitle %>">+</button>
    </form>
    </div>
</div>
 );
}

export default todoList;