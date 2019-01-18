[{"Owner":"InteractiveTimmy","Date":"2017-11-24T20:39:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_ve been working in Oimo to make realistic rag doll models and noticed that making accurate axis limitations that are unique per axis doesn_t_t seem to exist. The closest thing I see to creating this limitation is to generate a hinge joint_co_ which spans a single limit motor across each axis. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAn example use case would be to create a hip joint to a leg that consists of a [ -30_co_ 30 ] degree of movement on the Y axis to allow for leg twisting_co_ and a [ 135_co_ -45 ] degree of movement on the X axis to allow for forward and backwards movement for walking / running.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI made an attempt to modify Oimo to accommodate for this_co_ but ran into issues with how the limit motors interacted causing extremely unrealistic / sporadic movement.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tQuestion being_co_ does anyone know how to do this with Oimo JS as is? Additionally_co_ does anyone have a custom fork of Oimo JS that includes a custom joint that could handle these types of limitations.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tExample Oimo Hinge-Joint Call in this project_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_let myJoint _eq_ myWorld.add( {\n      type_dd__t_jointHinge_t__co_\n      body1_dd_myBoneA_co_\n      body2_dd_myBoneB_co_\n      axe1_dd_myJointParams.axis_co_ // Axis_co_ Scales Min/Max\n      axe2_dd_myJointParams.axis_co_\n      pos1_dd_myJointParams.pointA.toArray( )_co_ // Position Relative\n      pos2_dd_myJointParams.pointB.toArray( )_co_\n      min_dd_myJointParams.min_co_ // Bottom of Rotation [DEG]\n      max_dd_myJointParams.max_co_ // Top of Rotation [DEG]\n      spring_dd_[100_co_0.3] // Spring Force\n    } )_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2017-11-24T21:41:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tping _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"InteractiveTimmy","Date":"2017-11-24T21:56:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tAttached is my demo environment for building the skeleton model and what I_t_m attempting to do. Hopefully this provides some more information to help clarify what I_t_m trying to do.\n_lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/Axis.png.fc5691c06410eb4b2b059245bf8e7d3e.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_15909_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/Axis.thumb.png.2f2a6c860939b550fbda55c2f75f4585.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_Axis.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-11-25T05:01:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHiya IT... welcome to the forum.  Whelp... although I am a _qt_klutz_qt_ at physics_co_ I sometimes make an _qt_introductory_qt_ testing playground for new forum users.  So_co_ here we go...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1ND6TH%2319_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1ND6TH#19_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tClicking on screen... sends a little impulsing at _lt_strong_gt_part2_lt_/strong_gt_ (the red box)... just for tipping over _qt_the Z-hinged stack_qt_ and watching how everything acts.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnnoying crap_dd__lt_br /_gt_\n\t1.  Had to remove the _lt_em_gt_new_lt_/em_gt_ directive in line 83.  _lt_u_gt__lt_span style_eq__qt_color_dd_#c0392b_sm__qt__gt_new_lt_/span_gt__lt_/u_gt__lt_span_gt_ _lt_/span_gt_BABYLON.OimoJSPlugin().  Oimo runs much faster without it... nobody was ever able to tell me why_co_ nor have I been able to learn why._lt_br /_gt_\n\t2.  I have brutally tortured min_co_ max_co_ and spring _lt_em_gt_native parameters_lt_/em_gt_ for Joint1.  NONE of them seem to work.  But_co_ I dunno what they are for.  Min/max are BARELY documented.  Spring... not at all.  These are _lt_em_gt_native parameters_lt_/em_gt__co_ and as-such_co_ not really part of BJS.  But don_t_t ya wish there were some Oimo docs around?_lt_br /_gt_\n\t3.  Could Oimo run any slower?  My goodness.  I hijacked-in the Oimo executeStep function in lines 1-30_co_ and disabled both beforeStep and afterStep... to see if I could find any lost speed.  Nope._lt_br /_gt_\n\t4.  Although collisions set TRUE on joint1_co_ green tower (part 1) and red box (part2) never collide.  They freely overlap.  Part3 and part1 collide.  Part4 and part1 collide.  But those last two aren_t_t pertinent_co_ because the collisions parameter is talking ONLY about the mesh attached to each end of THAT joint.  So_co_ main point_co_ part2 suppose to collide with part1_co_ and failing.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOh well.  At least we have a testing playground to be discouraged-with_co_ now.  Sure_co_ I have Grand Theft Auto running in another window... but it_t_s all idled-down_co_ because otherwise_co_ my CPU fan would be whizzing at double-speed.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  I_t_ve seen Oimo run at twice these speeds... even on bad days.  Something is wrong somewhere.  It could certainly be my programming. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThese physics engines are going to be the death of us all_co_ with RaananW being the first to fall over dead.  _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_  He_t_s hauling a pretty heavy load... being our primary physics plugin custodian.  And_co_ the floor is moving beneath his feet... ie. the new transformNode - that could easily affect the physics engines/plugins.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWingnut is kind of sad over repeated physics engines issues.  I need to work harder to try to help RaananW_co_ somehow.  ANYway... stay positive_co_ we got a playground and we got geniuses in all directions.  Let_t_s go hackin_t_.  If anyone can get _lt_em_gt_spring_lt_/em_gt__co_ _lt_em_gt_min_co_ _lt_/em_gt_and_lt_em_gt_ max _lt_/em_gt_proven to work and show us how-so (by editing and saving more of these playgrounds)... that would be a great start.  Sorry if I inserted programming mistakes.  Party on!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPS_dd_  Line 194  -  _lt_strong_gt_limit_dd_ [-10_co_ 10]_lt_/strong_gt_... just a goofy Wingnut test.  Change it back to min and max again.  _lt_em_gt_Limit_lt_/em_gt_ is probably for MOTORS and not for hinge joints.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-11-25T05:19:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOh gosh_co_ try that demo in STABLE version...  _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/indexstable#1ND6TH%2319_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/indexstable#1ND6TH#19_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMUCH faster.  hmm.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"InteractiveTimmy","Date":"2017-11-25T16:47:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThank you _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ for the demo. After reviewing the playground demo_co_ I went ahead and threw in more joints to accommodate for the variations in axis. Divided the hip joints into smaller segments_co_ etc. This does add approximately 4 additional joints to the model_co_ and 4 additional bones. Not sure how this will impact performance when multiple models begin being generated. I will need to generate model disposal sometime soon that will handle this. See attached video for the [ possibly ] final prototype for the humanoid skeleton model.\n_lt_/p_gt_\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_15934_qt__gt_skeleton-demo.mp4_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-11-25T17:12:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tVery nice!  Well on your way!  Thx for sharing that.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-11-25T20:07:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI went touring...  _lt_a href_eq__qt_http_dd_//lo-th.github.io/Oimo.js/examples/test_ragdoll.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//lo-th.github.io/Oimo.js/examples/test_ragdoll.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSee how close-together his body-parts are?  There_t_s no min/max activity happening there at all.  That demo uses the _qt_collisions_qt_ between a_lt_strong_gt_join_lt_/strong_gt_ed mesh... to restrict the angle of the hinges.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOkay_co_ this means war.  Time to get out my old _qt_derived-from-source_qt_ badly-formated Oimo API page...  _lt_a href_eq__qt_http_dd_//urbanproductions.com/wingy/babylon/misc/j2h02.htm_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//urbanproductions.com/wingy/babylon/misc/j2h02.htm_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLoad that mess into a browser window... and do in-doc search for _qt__lt_span style_eq__qt_color_dd_#c0392b_sm__qt__gt__lt_span_gt_A hinge joint allows only for relative rotation of rigid bodies along the axis_lt_/span_gt__lt_/span_gt__qt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAfter some painful reading_co_ you_t_ll discover that Oimo hinge joints have NO min_co_ max_co_ or _qt_spring_qt_ native parameters.  With Oimo hinges_co_ it_t_s all about _qt_LimitMotors_qt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tScroll up a few lines... the LimitMotor class is right there.  Notice it has a lowerLimit_co_ upperLimit_co_ and a [frequency_co_ dampingRatio].  (I think those are the parameter names of the spring [8. 0.2] crap seen in my demo.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSO... we now know the CORRECT native parameter names to use for creating a _qt_LimitMotor_qt_ to be added to the hingeJoint.  BJS OimoPlugin appears to have _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/3.1/oimojsplugin#setmotor-joint-speed-maxforce-motorindex-rarr-void_qt_ rel_eq__qt_external nofollow_qt__gt_some handy methods_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAND_co_ there_t_s a class named MotorEnabledJoint!  We better do _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/playground?code_eq_motorEnabledJoint_qt_ rel_eq__qt_external nofollow_qt__gt_a playground search for that_lt_/a_gt__co_ eh?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYuh_co_ I think we have this Oimo _qt_stubborness_qt_ under control_co_ or near.  We OWN it!  Oimo hinges need a little different handling... but... now we know... now we conquer.  Well_co_ someone else conquers... I only watch and giggle.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-11-25T20:19:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOoooh_co_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#SFELK%2382_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#SFELK#82_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLook at lines 181-191 there... a motor enabled slider... with limit and max and min and spring.  Hmm...and its an oimo world.  Maybe there_t_s hope.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/indexstable#1ND6TH%2322_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/indexstable#1ND6TH#22_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMUCH more impulse power needed to move red box_co_ now.  (click on screen).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSOMETHING happened when I switched all three joints to motorEnabled.  I think stuff is active!  That doesn_t_t mean I know how to set the knobs_co_ but.. I think the knobs are working.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(Wingnut mistakes in original demo... sorry).  Motors for joint2/3 not yet activated... lines 223/224 adjust.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLimit parameter is probably for motor. I think it is _lt_strong_gt_limit_dd_ [force_co_ maxForce]_lt_/strong_gt_. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tTeach us everything everyone learns_co_ okay everyone?  (thx)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust between us gals_co_ I think RaananW (author of current plugins) _qt_massages_qt_ those _lt_em_gt_nativeParams_lt_/em_gt_ a bit... in the background... within the Oimo plugin.  Even though there is no _lt_em_gt_actual_lt_/em_gt_ min/max nativeParams on an oimo joint... he allows them on motorEnabledJoints.  He converts _lt_em_gt_min_lt_/em_gt_ and _lt_em_gt_max _lt_/em_gt_and _lt_em_gt_spring_lt_/em_gt_... into the _lt_em_gt_actual_lt_/em_gt_ format needed... for use in REAL Oimo nativeParams.  He_t_s just that kind of guy... shooting for _qt_standardized_qt_ as much as possible.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-11-26T16:05:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHowdy!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe reason the stable seems _qt_faster_qt_ is due to the world scale parameter. It was set correctly between stable and the current latest branch. This is why Oimo worlds used to be huge (check the car demo_t_s ground size - 4000) and now they can stay small. It simply looks slower_co_ but imagine a 100 meter wide car falling 40 meters in real life - it will probably look the same as what we see here _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI am trying to find a demo i can work with. Is there any playground link that is a start of what you are trying to achieve?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"InteractiveTimmy","Date":"2017-11-28T21:34:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe Demo has been helpful in regards to making my skeleton model more accurate. I have recently discovered that I_t_ve been mis-using the hinge joint_co_ realizing it limits the angle strictly to the single axis specified_co_ not open-ended per axis. Example_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\taxis_dd_ [ 1_co_ 1_co_ 1 ]_co_ max_dd_ 45_co_ min_dd_ -45_co_ spring_dd_[ 100_co_ 0.2 ]... This does not create a cone-style movement axis_co_ but instead keeps the angles of axis x_co_ y_co_ and z equal to eachother. So_co_ movement is limited to a single plane. I will keep making adjustments until I reach a working model that fits well with my use-case. Will update this thread if anything else comes up.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks again for all the assistance everyone.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-11-28T22:45:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi again IT_co_ good to hear. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYeah_co_ the ball-and-socket hinge for the hip... could be a challenge.  In fact_co_ all limb joints have _lt_em_gt_some_lt_/em_gt_ allowed _qt_z-axis spin_qt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere IS a ball-and-socket joint in Oimo.  But perhaps _lt_u_gt_more important_lt_/u_gt__co_ there is a hinge2joint/wheeljoint  (same things_co_ I think).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFrom _lt_a href_eq__qt_http_dd_//urbanproductions.com/wingy/babylon/misc/j2h02.htm_qt_ rel_eq__qt_external nofollow_qt__gt_my crappy Oimo API page_lt_/a_gt_...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_qt__lt_span_gt_A wheel joint allows for relative rotation between two rigid bodies along _lt_strong_gt_two axes_lt_/strong_gt_._qt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat sounds promising_co_ eh?  It has _lt_strong_gt_localAxis1_lt_/strong_gt__co_ _lt_strong_gt_localAxis2_lt_/strong_gt__co_ _lt_strong_gt_rotationalLimitMotor1_lt_/strong_gt_ and _lt_strong_gt_rotationalLimitMotor2_lt_/strong_gt_ settings.  YAY!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/playground?code_eq_wheeljoint_qt_ rel_eq__qt_external nofollow_qt__gt_playground search for wheeljoint_lt_/a_gt_ doesn_t_t explode with returns_co_ so perhaps you_t_ll need to do some serious experiments with it. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd don_t_t forget Raanan_t_s _lt_a href_eq__qt_https_dd_//blog.raananweber.com/2016/09/06/webgl-car-physics-using-babylon-js-and-oimo-js/_qt_ rel_eq__qt_external nofollow_qt__gt_nice Oimo Car tutorial_lt_/a_gt_.  (thx Raanan!)  I KNOW it talks about wheel joints and has a nice picture.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf/When you discover things about Oimo wheel joints_co_ could you show/tell us_co_ here or somewhere?  Thanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-11-29T12:13:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOimo supports more than one constraint on each two pairs of bodies. You can see that in the Hinge Joint constructor - _lt_a href_eq__qt_https_dd_//github.com/lo-th/Oimo.js/blob/gh-pages/src/constraint/joint/HingeJoint.js#L51_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/lo-th/Oimo.js/blob/gh-pages/src/constraint/joint/HingeJoint.js#L51_lt_/a_gt_ (and line 52). The hinge joint is defining two constraints - one linear and one rotational on all 3 axes. The rotation3 constraint (_lt_a href_eq__qt_https_dd_//github.com/lo-th/Oimo.js/blob/gh-pages/src/constraint/joint/base/Rotational3Constraint.js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/lo-th/Oimo.js/blob/gh-pages/src/constraint/joint/base/Rotational3Constraint.js_lt_/a_gt_) has the limit definitions defined in the first of 3 limiters (the others are limited so that the hinge will work correctly). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust to speak about the concept - to create a hip connected to the torso_co_ i would_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1) Create 3 meshes - torso_co_ connector_co_ hip. Connector is invisible and is only there to allow you to defined the joints individually!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1) Connect the connector to the torso using a hinge joint on the y axis (or a ball-and-socket joint which would fit better by name_co_ but oimo_t_s ball-and-socket don_t_t have a limit definition). This will allow the hip to turn around itself.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2) Connect the connector to the hip using another hinge-joint in the x axis (assuming z is depth and the person is looking at me)_co_ setting the limiter correctly\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOR\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCreate a ball-and-socket and keep on testing post-solve (the after-physics step callback would be enough) if the rotation is passing the limit and reset the rotation if it does. You can do it directly on the Oimo physics body_co_ or on the babylon mesh which will update the physics engine in the next frame.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn my car tutorial (_lt_a href_eq__qt_https_dd_//blog.raananweber.com/2016/09/06/webgl-car-physics-using-babylon-js-and-oimo-js/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//blog.raananweber.com/2016/09/06/webgl-car-physics-using-babylon-js-and-oimo-js/_lt_/a_gt_) I would say that the suspension would be your _qt_connector_qt_. The mesh can be invisible_co_ and you will need to define the pivots correctly so it would look like the hip is connected to the torso.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI will have the time in the next few days for sure and will try creating a simple lower-body-demo _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"InteractiveTimmy","Date":"2017-11-29T18:33:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you for all the information everyone_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve built the skeleton in a way that allows for the rag-dolls to move as needed. Attached are three demos. These demos are set to 1 unit _eq_&gt_sm_ 1 meter_co_ gravity_dd_ [0_co_ -1_co_ 0]_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tarc-engine-ani-rag shows a translation between animated model and rag-doll model and back. In this case_co_ since no animation is present_co_ it will simply freeze the model.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tarc-engine-rag-break shows a random joint break that separates the rag-doll.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tarc-engine-ragdoll shows the rag-doll simply falling to the platform.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe use case for these will be for a first-person shooter_co_ sorry I didn_t_t shared this information earlier.\n_lt_/p_gt_\n\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_16033_qt__gt_arc-engine-ani-rag-480.mp4_lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_16034_qt__gt_arc-engine-rag-break-480.mp4_lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_16035_qt__gt_arc-engine-ragdoll-480.mp4_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-11-30T10:13:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tLooking great!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWould be nice to learn a bit from your experience and understand how you decided to solve this eventually.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"InteractiveTimmy","Date":"2017-11-30T19:12:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks everyone_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWill be providing my platform demo here_co_ for people to review_co_ once i complete the skeleton. Still need to add a few things_dd_ Model Loading_co_ Animation sets_co_ Sleep/Wake handler_co_ etc. I might also update Oimo to run on a webworker before then as well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnother question for those who are experienced with web-workers_co_ is it worth_co_ or even possible_co_ to break down oimo into multiple web-workers? This would allow me to scale animation frames depending on each webworker. So_co_ if animations become a tasking process_co_ the animation webworker would lose momentum but the physics would still operate as needed.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet me know if anyone has any input on this.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]