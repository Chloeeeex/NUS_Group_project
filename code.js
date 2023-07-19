import { create_sprite,create_text,update_text, update_position, update_scale, pointer_over_gameobject, input_left_mouse_down, update_to_top, query_pointer_position, update_loop, build_game, update_color} from "arcade_2d";

const icon1_c = update_scale(create_sprite("https://raw.githubusercontent.com/Chloeeeex/NUS_Group_project/main/icon/b_box_1_close.jpg"),[0.1,0.1]);
const icon1_o = update_scale(create_sprite("https://raw.githubusercontent.com/Chloeeeex/NUS_Group_project/main/icon/b_box_1_open.jpg"),[0.1,0.1]);
const icon2_c = update_scale(create_sprite("https://raw.githubusercontent.com/Chloeeeex/NUS_Group_project/main/icon/b_box_2_close.jpg"),[0.1,0.1]);
const icon2_o = update_scale(create_sprite("https://raw.githubusercontent.com/Chloeeeex/NUS_Group_project/main/icon/b_box_2_open.jpg"),[0.1,0.1]);
const icon3_c = update_scale(create_sprite("https://raw.githubusercontent.com/Chloeeeex/NUS_Group_project/main/icon/b_box_3_close.jpg"),[0.1,0.1]);
const icon3_o = update_scale(create_sprite("https://raw.githubusercontent.com/Chloeeeex/NUS_Group_project/main/icon/b_box_3_open.jpg"),[0.1,0.1]);
const icon4_c = update_scale(create_sprite("https://raw.githubusercontent.com/Chloeeeex/NUS_Group_project/main/icon/b_box_4_close.jpg"),[0.1,0.1]);
const icon4_o = update_scale(create_sprite("https://raw.githubusercontent.com/Chloeeeex/NUS_Group_project/main/icon/b_box_4_open.jpg"),[0.1,0.1]);
const icon5_c = update_scale(create_sprite("https://raw.githubusercontent.com/Chloeeeex/NUS_Group_project/main/icon/b_box_5_close.jpg"),[0.1,0.1]);
const icon5_o = update_scale(create_sprite("https://raw.githubusercontent.com/Chloeeeex/NUS_Group_project/main/icon/b_box_5_open.jpg"),[0.1,0.1]);
const icon6_c = update_scale(create_sprite("https://raw.githubusercontent.com/Chloeeeex/NUS_Group_project/main/icon/melody_1_close.jpg"),[0.1,0.1]);
const icon6_o = update_scale(create_sprite("https://raw.githubusercontent.com/Chloeeeex/NUS_Group_project/main/icon/melody_1_open.jpg"),[0.1,0.1]);


const gameobjects = [
   
   update_position(icon1_c, [150, 200]),
   update_position(icon2_c, [300, 200]),
   update_position(icon3_c, [450, 200]),
   update_position(icon4_c, [150, 450]),
   update_position(icon5_c, [300, 450]),
   update_position(icon6_c, [450, 450])];

const textobjects = [
    update_position(update_scale(create_text('MY MUSIC'),[2.5,2.5]),[300,50]),
    update_position(create_text('start'),[150,300]),
    update_position(create_text('start'),[300,300]),
    update_position(create_text('start'),[450,300]),
    update_position(create_text('start'),[150,550]),
    update_position(create_text('start'),[300,550]),
    update_position(create_text('start'),[450,550])];
    
    
    
    
function click_textobject(textobject) {
  if (input_left_mouse_down() && pointer_over_gameobject(textobject) ) {
      update_to_top(update_text(update_color(textobject, [255, 0, 0, 255]),'stop'));
  }
}

update_loop(game_state => {
  for (let i = 1; i < 7; i = i + 1) {
      click_textobject(textobjects[i]);
  }
});


build_game();