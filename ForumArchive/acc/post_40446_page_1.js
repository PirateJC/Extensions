[{"Owner":"oschakravarthi","Date":"2018-10-04T23:09:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA strange problem_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a SpherePanel with some buttons. I am using Oculus Go. The white color line coming from the controller is not reaching upto the panel even though the panel is very close. (May be it is thinking that there is no clickable stuff ahead).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t            var button _eq_ new BABYLON.GUI.HolographicButton(Id)_sm__lt_br /_gt_\n\t            this._guiPanel.addControl(button)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t            var evt _eq_ new BABYLON.ExecuteCodeAction(_lt_br /_gt_\n\t                {_lt_br /_gt_\n\t                    trigger_dd_ BABYLON.ActionManager.OnPickDownTrigger_co__lt_br /_gt_\n\t                    parameter_dd_ _t_r_t__lt_br /_gt_\n\t                }_co__lt_br /_gt_\n\t                someCallback)_sm__lt_br /_gt_\n\t            button.isPickable _eq_ true_sm__lt_br /_gt_\n\t            button.actionManager _eq_ new BABYLON.ActionManager(_this._scene)_sm__lt_br /_gt_\n\t            button.actionManager.registerAction(evt)_sm__lt_br /_gt_\n\t            button.onPointerDownObservable.add(someCallback)_sm_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am setting both BABYLON.ActionManager.OnPickDownTrigger and onPointerDownObservable (I really don_t_t know whether I should subscribe to both the events are which one) but it is not reaching upto the buttons. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlease help me.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"oschakravarthi","Date":"2018-10-05T00:47:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe problem is coming only in VR mode. Any clue?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kcoley","Date":"2018-10-05T14:51:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPinging _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29361_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/_qt_ rel_eq__qt__qt__gt_@trevordev_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"trevordev","Date":"2018-10-05T17:03:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf you create a playground with just the buttons and don_t_t load anything else does the ray work as expected? My guess is that something else you are loading into the scene is blocking the ray_co_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"oschakravarthi","Date":"2018-10-28T18:03:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_  it was due my wrong implementation due to my poor understanding of ray and mesh selection predicates. Looked into Babylon na code and understood the concepts clearly. Now everything is working fine. Thank you _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29361_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/_qt_ rel_eq__qt__qt__gt_@trevordev_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]