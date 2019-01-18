[{"Owner":"phaselock","Date":"2017-08-05T12:47:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ I thought I would ask before coding functions for which I_t_m not certain babylon.js already supports.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there a ready method that can take a single obj/mesh that consists of several contiguous meshes and parse the contiguous meshes into_co_ say_co_ an array ? I have attached an example of a hex tile terrain (see attached) exported from blender which consists of 50 hex tiles. If possible_co_ I_t_d like to simply pass the hex terrain data and obtain all the 50 hex tiles in an array. Which I can then use mouse triggers on and so forth.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have read the doc and done some testing but cannot seem to get the behaviour I wanted with subMeshes. Does another method/function exists that can do the job? Or do I have to code my own by parsing the babylon file ?\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_08/test_scene.jpg.f2f08fd17e4b92b67c1c43c5939d06c6.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_14271_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_08/test_scene.jpg.f2f08fd17e4b92b67c1c43c5939d06c6.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_test_scene.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2017-08-05T15:29:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24872-phaselock/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24872_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24872-phaselock/_qt_ rel_eq__qt__qt__gt_@phaselock_lt_/a_gt_ _dd_ Hi and welcome to the forum. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_184457_qt_ data-ipsquote-contentid_eq__qt_32175_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1501937275_qt_ data-ipsquote-userid_eq__qt_24872_qt_ data-ipsquote-username_eq__qt_phaselock_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 hours ago_co_ phaselock said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI have attached an example of a hex tile terrain (see attached) exported from blender\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tWell here are a couple of ways you might get your tiles. I_t_m using an example of six meshes - 5 _qt_rocks_qt_ and a cube exported from Blender. The white cube_co_ which you can just under the rock at the centre_co_ is the parent to the five rocks (for the animation). But if your tiles have _lt_u_gt_no parent_lt_/u_gt_ and there are _lt_u_gt_no other meshes_lt_/u_gt_ to confuse the issue then _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#12M4MG_qt_ rel_eq__qt_external nofollow_qt__gt_PlayGround 1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe important lines are 27-35. The _qt__lt_em_gt_action_lt_/em_gt__qt_ I take on these meshes is to print out each mesh name to the browser console (line 34) you can add one or more lines of code to set your tile properties.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow if you have other meshes beside the _qt_tiles_qt__co_ in Blender you can create a parent_lt_u_gt_ just_lt_/u_gt_ for the tile meshes.  I created a cube but you can use an _qt_empty_qt_. Then when the file loads into BJS get that parent mesh (in my case the cube)  and then get its children (line 25 - 39). Again replace the line (37)where I print out the mesh name with your code to set the mesh properties.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#12M4MG%231_qt_ rel_eq__qt_external nofollow_qt__gt_PlayGround2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOthers may have different ways - I tend to use these.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHope that helps.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"phaselock","Date":"2017-08-06T01:18:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/?do_eq_hovercard_qt_ data-mentionid_eq__qt_7026_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/_qt_ rel_eq__qt__qt__gt_@gryff_lt_/a_gt_ Hey_co_ thanks for the quick reply and welcome. I_t_ve checked both pgs and I think there might be some confusion as you have multiple distinct scene meshes. I_t_m not certain how to repro my case in pg (can I upload my file to babylon server ?) so I_t_ve attached the babylon file here instead. My problem here is that there is only 1 mesh and therefore only 1 name (terrain)_co_ and a whole list of vertices and indices corresponding to the 50 hex tiles. The hex tiles are not connected as a single contiguous mesh. I created them quickly via the array modifier in blender.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIdeally_co_ I_t_d like to_co_ say_co_ mouseover the terrain and the corresponding hex tile below the cursor could highlight/change material etc. Which would mean that the code would need to parse the terrain mesh and obtain say hex[49] submeshes? In the actual application_co_ the number of hex tiles could be anywhere between 200-500? and each individual hex tile might have different heights etc.\n_lt_/p_gt_\n\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_14278_qt__gt_terrain.babylon_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2017-08-06T08:07:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou have to separate your whole mesh into separate hex in order to do this.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou might want to check Solid Particles System_co_ as it_t_s the best way to do it with decent performances (I can generate a map of 150*150 cubes without any problems with SPS).\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"phaselock","Date":"2017-08-06T12:07:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5218_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/_qt_ rel_eq__qt__qt__gt_@Temechon_lt_/a_gt_ Hey thanks for the suggestion. I checked SPS out but the single texture is a limitation I can_t_t accept. I will try a different approach to the problem. Many thanks to all for the help and suggestions.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\term_co_ how can I close this thread ? Can an admin help?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2017-08-06T17:13:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYou can try to have one SPS per texture (that_t_s what I did on my map with 3 different ground levels)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2017-08-06T21:34:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24872-phaselock/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24872_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24872-phaselock/_qt_ rel_eq__qt__qt__gt_@phaselock_lt_/a_gt_ _dd_ I don_t_t know if you are still interested in using Blender but here is an example I created using Blender and some  simple javascript code (I_t_m not a very good coder _lt_img alt_eq__qt__dd_o_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ title_eq__qt__dd_o_qt_ width_eq__qt_20_qt_ /_gt_) _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.3dworlds.ca/phaselock/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_Hexagons1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUsing the array modifier is going to create a single mesh  (as you found)_co_  so I used Blender_t_s particle system to layout the hexagons on a plane. Then I _qt_baked_qt_ out the meshes as _lt_u_gt_instances_lt_/u_gt_.-  so they all have the same material\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the javascript code I then replaced some of the instances with new instances with a different material_co_ then repeated this procedure by creating more new instances with another new material taking care not to overwrite the instances from the first replacement.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt works fine.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere are 4 drawcalls - three for the tree groups of hexagons and one for a tiny cube that is used as the target for the arcRotate camera (look underneath the hexagons).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"phaselock","Date":"2017-08-10T06:36:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_184529_qt_ data-ipsquote-contentid_eq__qt_32175_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1502039605_qt_ data-ipsquote-userid_eq__qt_5218_qt_ data-ipsquote-username_eq__qt_Temechon_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 8/7/2017 at 1_dd_13 AM_co_ Temechon said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tYou can try to have one SPS per texture (that_t_s what I did on my map with 3 different ground levels)\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHey _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5218_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/_qt_ rel_eq__qt__qt__gt_@Temechon_lt_/a_gt__co_ thanks for the advice. At the moment_co_ I do not think terrain type mesh creation with SPS is part of my workflow atm_co_ maybe you can understand better in the below ss. I_t_ll keep in mind tho.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_184548_qt_ data-ipsquote-contentid_eq__qt_32175_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1502055249_qt_ data-ipsquote-userid_eq__qt_7026_qt_ data-ipsquote-username_eq__qt_gryff_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 8/7/2017 at 5_dd_34 AM_co_ gryff said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24872-phaselock/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24872_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24872-phaselock/_qt_ rel_eq__qt__qt__gt_@phaselock_lt_/a_gt_ _dd_ I don_t_t know if you are still interested in using Blender but here is an example I created using Blender and some  simple javascript code (I_t_m not a very good coder _lt_img alt_eq__qt__dd_o_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ title_eq__qt__dd_o_qt_ width_eq__qt_20_qt_ /_gt_) _dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t...\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/?do_eq_hovercard_qt_ data-mentionid_eq__qt_7026_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/_qt_ rel_eq__qt__qt__gt_@gryff_lt_/a_gt__co_ hey this is a nice effort_co_ thanks ! Yes_co_ my workflow is still Blender to babylon. I didn_t_t clone or make new instances but took a different direction_co_ as my below ss shows. I made a slightly more randomized untextured terrain in blender which could easily use 4/5 different textures. Then I parented a few empties to some of the hex tiles (just for testing purposes) and wrote some code in babylon with scene.pick to find the empties position corresponding to a mouse click. The yellow highlight is a temp disc mesh that will match to empty position when said tile is clicked (will replace with dynamic texture in future). By my estimates_co_ this is memory and computation wise more efficient. No mesh cloning or instances needed and still scalable.  The largest memory overhead would be from the getVerticesData call of the imported mesh (would be nice if I could just grab part of the data instead of the whole array). I will need to prolly load a denser mesh and do some profiling to know for sure.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRight now_co_ having problems getting it to trigger for mouse moves instead of working with clicks...hrm...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tStill thanks to everyone for the many advice and help. The current approach is somewhat different from the OP_co_ I_t_m not sure if this Q&amp_sm_A is still relevant tho. Hope it helps_co_ cheers.\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_08/test_scene1.jpg.a866a9d4f0183084f353da0c29e9b04d.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_14370_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_08/test_scene1.jpg.a866a9d4f0183084f353da0c29e9b04d.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_test_scene1.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]