[{"Owner":"HPW","Date":"2016-09-09T10:21:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am new to babylon.js and have a question about possible use of the obj loader in babylon_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA obj file has groups which does sort the 3D faces into objects. Many obj viewer does show the resulting object-tree.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs this structure preserved after loading into babylon?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs it possible to build a web-viewer for such scene where I can pick a group/object and get back the groupname-string?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs it possible to highlight oder mark the selected object?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have not found a limit in the obj specs about the groupnames possible max string-length. Any limit in babylon?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRegards\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHans-Peter\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-09-09T22:58:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23520-hpw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23520_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23520-hpw/_qt_ rel_eq__qt__qt__gt_@HPW_lt_/a_gt__co_ welcome to the forum!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s look at this popular obj-loading playground demo.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#28YUR5%23111_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#28YUR5#111_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_qt_Bane_qt_ is the big creature in the middle_co_ I guess.  (Wingnut not a Batman fan.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is link to obj file used... _lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/17799537/objFileLoader/Bane/Bane_3.obj_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//dl.dropboxusercontent.com/u/17799537/objFileLoader/Bane/Bane_3.obj_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSee any group names in there?  I don_t_t know if there are any in there.  Maybe not.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUsing browser f12 tools_co_ I viewed the Bane object in object inspector.  It has a .loadedMeshes property with 8 objects.  Each object has an .id that _lt_em_gt_might be_lt_/em_gt_ the subMesh (group) name. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI printed them to JS console.  Also_co_ each of those have .isPickable set true (see console_co_ also).  They are ready for clicking_co_ after scene pick-code is written.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThese 8 objects are groups_co_ correct? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf not_co_ would you please create playground... loading .obj file that has group names?  Thx. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tPerhaps this talk/test... answers your questions?  I hope so.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYes_co_ you can highlight or mark these objects... using showBoundingBox_co_ or edgesRenderer_co_ or outLineRenderer_co_ or umm... _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt_ created another _qt_outliner_qt_ using shaders_co_ I think.  Many ways to mark/highlight.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tStudy and experiment... perhaps you will be successful.  If there is problems_co_ come here and tell problem.  We help.  Thanks!  Again_co_ welcome!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-09-10T06:36:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thi \n_lt_/p_gt_\n\n_lt_p_gt_\n\ti just make that for how can select group of mesh  use with one mesh hover on the GPU and no information for cpu side or javascript\n_lt_/p_gt_\n\n_lt_p_gt_\n\twe just show that in render output\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1TYWYB%23142_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1TYWYB#142_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1TYWYB%23143_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1TYWYB#143_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou can keep your standard material and just need make helper material \n_lt_/p_gt_\n\n_lt_p_gt_\n\ti recommend use this function\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_function helper(mesh_co_groupKey_co_ scene) { \n\t\t\t\n\t\t\tmesh.helperMaterial _eq_ new BABYLONX.ShaderBuilder()\n\t\t\t\t.Solid() // black material\n                .SetUniform(_t_Group_t__co__t_float_t_) // define group uniform\n\t\t\t\t .InLine(_t_if(Group_eq__eq__t_+groupKey+_t_.0 ){_t_) // condition of shader for change color\n\t\t\t\t.IdColor(13000200_co_ 1.) // costom Color Id _dd_ 13000200 just some id to changed to unsigned integer and postprocess can detect that \n\t\t\t\t.InLine(_t_}_t_) // end of block\n\t\t\t\t.BuildMaterial(scene)_sm_\n\t\t\t\t \n\t\t    mesh.actionManager _eq_ new BABYLON.ActionManager(scene)_sm_\n\t\t\tmesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger_co_ function(ev){\t\n                // when hover this mesh change selectiongroup\n\t\t\t\tselectedGroup _eq_ groupKey_sm_\n\t\t\t}))_sm_\n\t\t\tmesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger_co_ function(ev){\t\n               // unselect when changed material is not used\n\t\t\t\tselectedGroup _eq_ 0_sm_\n\t\t\t}))_sm_\n\nmesh._savedMaterial _eq_ mesh.material_sm_ // keep current material in that for optimized rendertarget\n\t\t\t\n\t\t\t\n\t\t}\n\t\t_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"HPW","Date":"2016-09-10T07:28:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for the quick replys and the welcome.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFollowing your hint I first get the complete asset_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_https_dd_//dl.dropboxusercontent.com/u/17799537/objFileLoader/Bane/Bane_3.obj\nhttps_dd_//dl.dropboxusercontent.com/u/17799537/objFileLoader/Bane/Bane_3.mtl\nhttps_dd_//dl.dropboxusercontent.com/u/17799537/objFileLoader/Bane/Bane3_Chest_D.tga\nhttps_dd_//dl.dropboxusercontent.com/u/17799537/objFileLoader/Bane/Bane3_Stuff_D.tga\nhttps_dd_//dl.dropboxusercontent.com/u/17799537/objFileLoader/Bane/Bane3_Eye_D.tga\nhttps_dd_//dl.dropboxusercontent.com/u/17799537/objFileLoader/Bane/Bane3_Head_D.tga\nhttps_dd_//dl.dropboxusercontent.com/u/17799537/objFileLoader/Bane/Bane3_Mouth_D.tga\nhttps_dd_//dl.dropboxusercontent.com/u/17799537/objFileLoader/Bane/Bane3_Pants_D.tga_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tLooking into the obj and mtl files with an Editor_co_ I find the 8 object definitions.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_o Bane3Mouth\no Bane3Head\no Bane3Coverlid\no Bane3Pipes\no Bane3Pants\no Bane3Chest\no Bane3Stuff\no Bane3Eyes\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tSo the loader supports the o-Definition. Good to know. So now I have to find out if the g-Definition is also supported.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tQuestion_dd_ Do you think that there is a Limit in the length of the object-name-string. Can it become longer?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo I have to start to get deeper into the babylonjs-stuff and ist Debugging technics.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tQuestion to the mouser_over Events_dd_ Has this Event the object-name and can update other Areas of the Html-page with some text-info about the object?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks again!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRegards\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHans-Peter\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]