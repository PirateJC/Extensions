[{"Owner":"dbawel","Date":"2018-03-04T05:13:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have several meshes on paths_co_ and need to begin particle animations at specific locations on the paths. However_co_ when I use the position of an object or child on the path to start the particle animation_co_ the condition is never met. I assume that the transforms are not updated on path animations.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I start the particle animation_co_ it starts. But if I place it in a condition_co_ in the same location in my script_co_ the particle animation will not start. I_t_m using it on the same path which _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt_ helped me with last night_dd__dd_\n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed9265096491_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/36087-solved-rotation-flipping-when-mesh-on-path/?do_eq_embed_qt_ style_eq__qt_height_dd_207px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_if (mesh.position.y &gt_sm_ 0) {_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_smokeSystem.start()_sm__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_}_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand mesh is on the path passing above 0.0 - which I_t_ve tried every axis and the particle system will not start.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I use collisions by placing a cube on the path which my object must pass through such as_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_    let abc _eq_ BABYLON.MeshBuilder.CreateBox(`abc`_co_ { size_dd_ 5 }_co_ scene)_sm_  _lt_br /_gt_\n\t    abc.position _eq_ new BABYLON.Vector3(-50_co_ 10_co_ 100)_sm__lt_br /_gt_\n\t    _lt_br /_gt_\n\t    if (vehicle.intersectsMesh(abc_co_ true)) {_lt_br /_gt_\n\t      _lt_br /_gt_\n\t    smokeSystem.start()_sm__lt_br /_gt_\n\t    _lt_br /_gt_\n\t    }_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe particles will not start. But if I say _lt_strong_gt_smokeSystem.start()_sm__lt_/strong_gt_ in the exact same location_co_ the particles start. I_t_ve spent hours on this_co_ and tried everything I know. If anyone can help_co_ please let me know as I have to finish this tomorrow.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks much_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-03-04T05:34:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI updated the PG scene _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt_ was kind enough to build last night. If you un remark the _lt_strong style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_smokeSystem.start()_sm__lt_/strong_gt_ you_t_ll see it works. But I need the particles to only start near the top of the heart_co_ and then stop before the bottom_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#72C7CT%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#72C7CT#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny thoughts would be very helpful. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ - do you have time to look at this? I really need help today_co_ as I_t_ve wasted hours on collisions_co_ GetAbsolutePosition_co_ and everything else I can think of.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks much_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MarianG","Date":"2018-03-04T07:35:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSomething like this ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#72C7CT%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#72C7CT#3_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-03-04T19:45:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/12295-mariang/?do_eq_hovercard_qt_ data-mentionid_eq__qt_12295_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/12295-mariang/_qt_ rel_eq__qt__qt__gt_@MarianG_lt_/a_gt_-\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried several conditions similar to this_co_ but didn_t_t get it right. Thank you very much for taking the time to answer and to update the PG. Between you and _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt__co_ you helped add a key component to the project which was as frustrating as I_t_ve yet encountered. I missed the logic needed to execute this_co_ and I wish you lived closer to San Diego_co_ as I_t_d definitely buy you and John a beer - or two. Thank you again for your help.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]