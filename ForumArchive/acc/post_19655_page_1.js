[{"Owner":"willemmulder","Date":"2016-01-05T10:42:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_When creating a box_co_ there_t_s the assumption that all sides are of equal length._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_However_co_ for a rubberband selection in an RTS I_t_d like to create a rectangular box on the fly (from the screen down to the ground) and then check intersections with all units on the screen to select them._lt_/p_gt__lt_p_gt_How could I create a rectangular box_co_ or is there even a better way to do rubberband selection in BabylonJS?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-01-05T10:49:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#box_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#box_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"willemmulder","Date":"2016-01-05T11:01:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ah_co_ thanks!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I was looking here _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.1/Mesh_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/2.1/Mesh_lt_/a_gt_ which gives different results... Is that an _t_error_t_ in the documentation_co_ or are they different functions? _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is using such a box to achieve rubber band selection the good way to go_co_ or is there a faster and/or easier way?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-01-05T12:32:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_as for v2.2_co_ the new MeshBuilder class has been added_co_ with many new parameters for each basic shapes._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"willemmulder","Date":"2016-01-05T12:41:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Excellent_co_ thanks! _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It might be a good idea to update the docs at _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/02-Basic-elements_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/02-Basic-elements_lt_/a_gt_ to reflect that. _lt_/p_gt__lt_p_gt_Once I have some more experience with Babylon and I know what to use how and when_co_ I_t_d make a suggestion as a pull request_co_ but right now I_t_m not comfortable enough _dd_-)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"willemmulder","Date":"2016-01-05T14:34:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Small additional question_dd_ once I have the mesh_co_ how could I update the width_co_ height or depth afterwards?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"hen","Date":"2016-01-05T14:50:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_For the same approach i was just adding a layer on top of the scene node wich holds the properties and creates/updates the node based on property changes._lt_/p_gt__lt_p_gt_So always when a property like _qt_width_qt_ changes_co_ it does dispose the current node and adds a new one based on the new props._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"willemmulder","Date":"2016-01-05T14:56:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Right_co_ so you recreate the Box everytime the _t_parent_t_ width property changes and then add the new Box to the scene. That would work... How is the performance?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Still it would be nicer I think if we can simply change the width on the box itself and it would update the vertices _dd_-) is that possible somehow_co_ or can we easily update the vertices ourselves?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"hen","Date":"2016-01-05T15:01:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Performance is really fast... im doing this in realtime within a persistant MMO editor like shown below._lt_/p_gt__lt_p_gt_I think there is no property to modify the box itself like that_co_ at least i did not found any.. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_img src_eq__qt_https_dd_//dl.dropboxusercontent.com/u/40028603/screen1.png_qt_ alt_eq__qt_screen1.png_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"willemmulder","Date":"2016-01-05T15:06:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_All right_co_ thanks_co_ then I_t_ll try to recreate the box at first_co_ and if performance becomes an issue_co_ change that to modify the raw vertices_co_ if that is even possible at all..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2016-01-06T09:10:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@willem it should be possible to to change the vertices_co_ but might be troublesome_co_ especially with complex objects. You have always the option to scale a mesh using the _lt_em_gt_scaling_lt_/em_gt_ property_co_ did you know about that? _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1KJQMZ%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1KJQMZ#0_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In the first step this will just create a scaling that is not yet applied in the vertices of the mesh_co_ but in a second step you could call_lt_em_gt_ bakeCurrentTransformIntoVertices_lt_/em_gt_ to make your new scaling permanent_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1KJQMZ%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1KJQMZ#1_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]