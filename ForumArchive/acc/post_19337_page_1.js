[{"Owner":"KarelAnker","Date":"2015-12-18T09:30:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_a href_eq__qt_http_dd_//imgur.com/PDBj6MG_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//imgur.com/PDBj6MG_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Basically I_t_m trying to extrude a shape on the Y axis. All of the points have a Y of 0_co_ only the X and Z are differing each time._lt_/p_gt__lt_p_gt_When you_t_re looking at the picture_co_ you can see the white lines are the points connected by BABYLON.MeshBuilder.CreateLines_co_ so the points shouldn_t_t be the problem. However_co_ if you are looking at that big grey thing going in the air_co_ that_t_s the extruded shape from the points. It seems that it doesn_t_t extrude properly on the Y axis so it_t_s really messed up._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The code looks like this_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_BABYLON.MeshBuilder.CreateLines(_qt_line_qt__co_ { points_dd_ meshPoints }_co_ scene)_sm_var block _eq_ BABYLON.MeshBuilder.ExtrudeShape(_qt_block_qt__co_ {shape_dd_ meshPoints_co_path_dd_ [new BABYLON.Vector3(0_co_ -1_co_ 0)_co_ new BABYLON.Vector3(0_co_ 0_co_ 0)]_co_scale_dd_ 1_co_cap_dd_ BABYLON.Mesh.CAP_ALL}_co_ scene)_sm__lt_/pre_gt__lt_p_gt_As you can see_co_ I just want it to be extruded from the bottom to the top_co_ which should result in a box which follows the mesh points. It should look like the white lines_co_ but then filled up and having a _qt_height_qt_ to it._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-12-18T09:38:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The logical model to be extruded _lt_u_gt_must_lt_/u_gt_ be defined in the xOy plane _dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/Parametric_Shapes#extrusion_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/Parametric_Shapes#extrusion_lt_/a_gt__lt_/p_gt__lt_p_gt_So all its z values equal to zero._lt_/p_gt__lt_p_gt_This is a requirement._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"KarelAnker","Date":"2015-12-18T10:18:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_109613_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_19337_qt_ data-ipsquote-username_eq__qt_jerome_qt_ data-cite_eq__qt_jerome_qt_ data-ipsquote-timestamp_eq__qt_1450431530_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_The logical model to be extruded _lt_u_gt_must_lt_/u_gt_ be defined in the xOy plane _dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/Parametric_Shapes#extrusion_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/Parametric_Shapes#extrusion_lt_/a_gt__lt_/p_gt__lt_p_gt_So all its z values equal to zero._lt_/p_gt__lt_p_gt_This is a requirement._lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_Ah.. Do you have any alternative suggestions to achieve my idea?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-12-18T10:27:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Just convert your array _lt_em_gt_points_lt_/em_gt_ (or clone it to another) so you redfine the shape in the xOy plane._lt_/p_gt__lt_p_gt_The model shape is not a mesh_co_ it_t_s just a logical model _dd_ a series of vector3_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"KarelAnker","Date":"2015-12-18T16:06:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_109617_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_19337_qt_ data-ipsquote-username_eq__qt_jerome_qt_ data-cite_eq__qt_jerome_qt_ data-ipsquote-timestamp_eq__qt_1450434438_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Just convert your array _lt_em_gt_points_lt_/em_gt_ (or clone it to another) so you redfine the shape in the xOy plane._lt_/p_gt__lt_p_gt_The model shape is not a mesh_co_ it_t_s just a logical model _dd_ a series of vector3_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_I_t_ve partially fixed it_co_ however there_t_s one problem which I can_t_t figure out_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#RF9W9%23181_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#RF9W9#181_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As you can see_co_ when you add the _qt_cap_qt_ option_co_ there are some weird black parts and parts which shouldn_t_t be capped at all. _lt_/p_gt__lt_p_gt_(PS_dd_ I added some alpha so you can see the yellow line representing the shape..)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-12-18T16:15:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m afraid that with non-concave model shapes the results of the capping process (based on barycenter computation) may differ from what you may expect._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-12-20T08:45:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The computation of the barycenter for extruded shape caps is a design choice (cf previous posts in another topic) to keep a good performance when  morphing dynamically the extruded shape _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#20IBWW%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#20IBWW#2_lt_/a_gt__lt_/p_gt__lt_p_gt_It works quite well for concave model shape but can have weird results for conves ones._lt_/p_gt__lt_p_gt_Maybe_co_ in your case_co_ you might use the polygon builder instead of the extrusion embedded capping._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]