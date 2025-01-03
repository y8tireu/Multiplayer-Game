gdjs.GameSceneCode = {};
gdjs.GameSceneCode.localVariables = [];
gdjs.GameSceneCode.GDJumpArrowButtonObjects1_1final = [];

gdjs.GameSceneCode.GDLeftArrowButtonObjects2_1final = [];

gdjs.GameSceneCode.GDRightArrowButtonObjects2_1final = [];

gdjs.GameSceneCode.forEachCount0_3 = 0;

gdjs.GameSceneCode.forEachCount0_4 = 0;

gdjs.GameSceneCode.forEachCount1_3 = 0;

gdjs.GameSceneCode.forEachCount1_4 = 0;

gdjs.GameSceneCode.forEachIndex3 = 0;

gdjs.GameSceneCode.forEachIndex4 = 0;

gdjs.GameSceneCode.forEachObjects3 = [];

gdjs.GameSceneCode.forEachObjects4 = [];

gdjs.GameSceneCode.forEachTemporary3 = null;

gdjs.GameSceneCode.forEachTotalCount3 = 0;

gdjs.GameSceneCode.forEachTotalCount4 = 0;

gdjs.GameSceneCode.GDPlayer1Objects1= [];
gdjs.GameSceneCode.GDPlayer1Objects2= [];
gdjs.GameSceneCode.GDPlayer1Objects3= [];
gdjs.GameSceneCode.GDPlayer1Objects4= [];
gdjs.GameSceneCode.GDPlayer1Objects5= [];
gdjs.GameSceneCode.GDTilesObjects1= [];
gdjs.GameSceneCode.GDTilesObjects2= [];
gdjs.GameSceneCode.GDTilesObjects3= [];
gdjs.GameSceneCode.GDTilesObjects4= [];
gdjs.GameSceneCode.GDTilesObjects5= [];
gdjs.GameSceneCode.GDCoinObjects1= [];
gdjs.GameSceneCode.GDCoinObjects2= [];
gdjs.GameSceneCode.GDCoinObjects3= [];
gdjs.GameSceneCode.GDCoinObjects4= [];
gdjs.GameSceneCode.GDCoinObjects5= [];
gdjs.GameSceneCode.GDCoin_9595countsObjects1= [];
gdjs.GameSceneCode.GDCoin_9595countsObjects2= [];
gdjs.GameSceneCode.GDCoin_9595countsObjects3= [];
gdjs.GameSceneCode.GDCoin_9595countsObjects4= [];
gdjs.GameSceneCode.GDCoin_9595countsObjects5= [];
gdjs.GameSceneCode.GDRestartPointObjects1= [];
gdjs.GameSceneCode.GDRestartPointObjects2= [];
gdjs.GameSceneCode.GDRestartPointObjects3= [];
gdjs.GameSceneCode.GDRestartPointObjects4= [];
gdjs.GameSceneCode.GDRestartPointObjects5= [];
gdjs.GameSceneCode.GDButtonObjects1= [];
gdjs.GameSceneCode.GDButtonObjects2= [];
gdjs.GameSceneCode.GDButtonObjects3= [];
gdjs.GameSceneCode.GDButtonObjects4= [];
gdjs.GameSceneCode.GDButtonObjects5= [];
gdjs.GameSceneCode.GDSpikesObjects1= [];
gdjs.GameSceneCode.GDSpikesObjects2= [];
gdjs.GameSceneCode.GDSpikesObjects3= [];
gdjs.GameSceneCode.GDSpikesObjects4= [];
gdjs.GameSceneCode.GDSpikesObjects5= [];
gdjs.GameSceneCode.GDDoorway2Objects1= [];
gdjs.GameSceneCode.GDDoorway2Objects2= [];
gdjs.GameSceneCode.GDDoorway2Objects3= [];
gdjs.GameSceneCode.GDDoorway2Objects4= [];
gdjs.GameSceneCode.GDDoorway2Objects5= [];
gdjs.GameSceneCode.GDDoorObjects1= [];
gdjs.GameSceneCode.GDDoorObjects2= [];
gdjs.GameSceneCode.GDDoorObjects3= [];
gdjs.GameSceneCode.GDDoorObjects4= [];
gdjs.GameSceneCode.GDDoorObjects5= [];
gdjs.GameSceneCode.GDPlayer2Objects1= [];
gdjs.GameSceneCode.GDPlayer2Objects2= [];
gdjs.GameSceneCode.GDPlayer2Objects3= [];
gdjs.GameSceneCode.GDPlayer2Objects4= [];
gdjs.GameSceneCode.GDPlayer2Objects5= [];
gdjs.GameSceneCode.GDRightArrowButtonObjects1= [];
gdjs.GameSceneCode.GDRightArrowButtonObjects2= [];
gdjs.GameSceneCode.GDRightArrowButtonObjects3= [];
gdjs.GameSceneCode.GDRightArrowButtonObjects4= [];
gdjs.GameSceneCode.GDRightArrowButtonObjects5= [];
gdjs.GameSceneCode.GDLeftArrowButtonObjects1= [];
gdjs.GameSceneCode.GDLeftArrowButtonObjects2= [];
gdjs.GameSceneCode.GDLeftArrowButtonObjects3= [];
gdjs.GameSceneCode.GDLeftArrowButtonObjects4= [];
gdjs.GameSceneCode.GDLeftArrowButtonObjects5= [];
gdjs.GameSceneCode.GDJumpArrowButtonObjects1= [];
gdjs.GameSceneCode.GDJumpArrowButtonObjects2= [];
gdjs.GameSceneCode.GDJumpArrowButtonObjects3= [];
gdjs.GameSceneCode.GDJumpArrowButtonObjects4= [];
gdjs.GameSceneCode.GDJumpArrowButtonObjects5= [];


gdjs.GameSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("JumpArrowButton"), gdjs.GameSceneCode.GDJumpArrowButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("LeftArrowButton"), gdjs.GameSceneCode.GDLeftArrowButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("RightArrowButton"), gdjs.GameSceneCode.GDRightArrowButtonObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDRightArrowButtonObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDRightArrowButtonObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameSceneCode.GDLeftArrowButtonObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDLeftArrowButtonObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameSceneCode.GDJumpArrowButtonObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDJumpArrowButtonObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameSceneCode.eventsList1 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RestartPoint"), gdjs.GameSceneCode.GDRestartPointObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 3, "", 0);
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "74;144;226");
}{for(var i = 0, len = gdjs.GameSceneCode.GDRestartPointObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDRestartPointObjects1[i].hide();
}
}
{ //Subevents
gdjs.GameSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.GameSceneCode.eventsList2 = function(runtimeScene) {

{

gdjs.GameSceneCode.GDLeftArrowButtonObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameSceneCode.GDLeftArrowButtonObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("LeftArrowButton"), gdjs.GameSceneCode.GDLeftArrowButtonObjects3);
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDLeftArrowButtonObjects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDLeftArrowButtonObjects3[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.GameSceneCode.GDLeftArrowButtonObjects3[k] = gdjs.GameSceneCode.GDLeftArrowButtonObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDLeftArrowButtonObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameSceneCode.GDLeftArrowButtonObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameSceneCode.GDLeftArrowButtonObjects2_1final.indexOf(gdjs.GameSceneCode.GDLeftArrowButtonObjects3[j]) === -1 )
            gdjs.GameSceneCode.GDLeftArrowButtonObjects2_1final.push(gdjs.GameSceneCode.GDLeftArrowButtonObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameSceneCode.GDLeftArrowButtonObjects2_1final, gdjs.GameSceneCode.GDLeftArrowButtonObjects2);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameSceneCode.GDPlayer1Objects1, gdjs.GameSceneCode.GDPlayer1Objects2);

gdjs.copyArray(gdjs.GameSceneCode.GDPlayer2Objects1, gdjs.GameSceneCode.GDPlayer2Objects2);

{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer1Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer1Objects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
for(var i = 0, len = gdjs.GameSceneCode.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer2Objects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.GameSceneCode.GDRightArrowButtonObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameSceneCode.GDRightArrowButtonObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("RightArrowButton"), gdjs.GameSceneCode.GDRightArrowButtonObjects3);
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDRightArrowButtonObjects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDRightArrowButtonObjects3[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.GameSceneCode.GDRightArrowButtonObjects3[k] = gdjs.GameSceneCode.GDRightArrowButtonObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDRightArrowButtonObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameSceneCode.GDRightArrowButtonObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameSceneCode.GDRightArrowButtonObjects2_1final.indexOf(gdjs.GameSceneCode.GDRightArrowButtonObjects3[j]) === -1 )
            gdjs.GameSceneCode.GDRightArrowButtonObjects2_1final.push(gdjs.GameSceneCode.GDRightArrowButtonObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameSceneCode.GDRightArrowButtonObjects2_1final, gdjs.GameSceneCode.GDRightArrowButtonObjects2);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameSceneCode.GDPlayer1Objects1, gdjs.GameSceneCode.GDPlayer1Objects2);

gdjs.copyArray(gdjs.GameSceneCode.GDPlayer2Objects1, gdjs.GameSceneCode.GDPlayer2Objects2);

{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer1Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer1Objects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
for(var i = 0, len = gdjs.GameSceneCode.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer2Objects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.GameSceneCode.GDJumpArrowButtonObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameSceneCode.GDJumpArrowButtonObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("JumpArrowButton"), gdjs.GameSceneCode.GDJumpArrowButtonObjects2);
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDJumpArrowButtonObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDJumpArrowButtonObjects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.GameSceneCode.GDJumpArrowButtonObjects2[k] = gdjs.GameSceneCode.GDJumpArrowButtonObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDJumpArrowButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameSceneCode.GDJumpArrowButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameSceneCode.GDJumpArrowButtonObjects1_1final.indexOf(gdjs.GameSceneCode.GDJumpArrowButtonObjects2[j]) === -1 )
            gdjs.GameSceneCode.GDJumpArrowButtonObjects1_1final.push(gdjs.GameSceneCode.GDJumpArrowButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameSceneCode.GDJumpArrowButtonObjects1_1final, gdjs.GameSceneCode.GDJumpArrowButtonObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDPlayer1Objects1 */
/* Reuse gdjs.GameSceneCode.GDPlayer2Objects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer1Objects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
for(var i = 0, len = gdjs.GameSceneCode.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer2Objects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};gdjs.GameSceneCode.eventsList3 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameSceneCode.GDPlayer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameSceneCode.GDPlayer2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPlayer1Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDPlayer1Objects1[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPlayer1Objects1[k] = gdjs.GameSceneCode.GDPlayer1Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPlayer1Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPlayer2Objects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDPlayer2Objects1[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPlayer2Objects1[k] = gdjs.GameSceneCode.GDPlayer2Objects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPlayer2Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameSceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDButtonObjects4Objects = Hashtable.newFrom({"Button": gdjs.GameSceneCode.GDButtonObjects4});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayer1Objects4ObjectsGDgdjs_9546GameSceneCode_9546GDPlayer2Objects4Objects = Hashtable.newFrom({"Player1": gdjs.GameSceneCode.GDPlayer1Objects4, "Player2": gdjs.GameSceneCode.GDPlayer2Objects4});
gdjs.GameSceneCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13377548);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "DoorOpen", false, 50, 1);
}}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDButtonObjects4Objects = Hashtable.newFrom({"Button": gdjs.GameSceneCode.GDButtonObjects4});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayer1Objects4ObjectsGDgdjs_9546GameSceneCode_9546GDPlayer2Objects4Objects = Hashtable.newFrom({"Player1": gdjs.GameSceneCode.GDPlayer1Objects4, "Player2": gdjs.GameSceneCode.GDPlayer2Objects4});
gdjs.GameSceneCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13380292);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "DoorOpen", false, 50, 0.8);
}}

}


};gdjs.GameSceneCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameSceneCode.GDButtonObjects3, gdjs.GameSceneCode.GDButtonObjects4);

gdjs.copyArray(gdjs.GameSceneCode.GDDoorway2Objects3, gdjs.GameSceneCode.GDDoorway2Objects4);

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameSceneCode.GDPlayer1Objects4);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameSceneCode.GDPlayer2Objects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDDoorway2Objects4.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDDoorway2Objects4[i].getBehavior("Animation").getAnimationIndex() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDDoorway2Objects4[k] = gdjs.GameSceneCode.GDDoorway2Objects4[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDDoorway2Objects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDButtonObjects4Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayer1Objects4ObjectsGDgdjs_9546GameSceneCode_9546GDPlayer2Objects4Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDDoorway2Objects4 */
{for(var i = 0, len = gdjs.GameSceneCode.GDDoorway2Objects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDDoorway2Objects4[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{ //Subevents
gdjs.GameSceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.GameSceneCode.GDButtonObjects3, gdjs.GameSceneCode.GDButtonObjects4);

gdjs.copyArray(gdjs.GameSceneCode.GDDoorway2Objects3, gdjs.GameSceneCode.GDDoorway2Objects4);

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameSceneCode.GDPlayer1Objects4);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameSceneCode.GDPlayer2Objects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDDoorway2Objects4.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDDoorway2Objects4[i].getBehavior("Animation").getAnimationIndex() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDDoorway2Objects4[k] = gdjs.GameSceneCode.GDDoorway2Objects4[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDDoorway2Objects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDButtonObjects4Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayer1Objects4ObjectsGDgdjs_9546GameSceneCode_9546GDPlayer2Objects4Objects, true, runtimeScene, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDDoorway2Objects4 */
{for(var i = 0, len = gdjs.GameSceneCode.GDDoorway2Objects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDDoorway2Objects4[i].getBehavior("Animation").setAnimationIndex(0);
}
}
{ //Subevents
gdjs.GameSceneCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.GameSceneCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.GameSceneCode.GDButtonObjects2);

for (gdjs.GameSceneCode.forEachIndex3 = 0;gdjs.GameSceneCode.forEachIndex3 < gdjs.GameSceneCode.GDButtonObjects2.length;++gdjs.GameSceneCode.forEachIndex3) {
gdjs.copyArray(runtimeScene.getObjects("Doorway2"), gdjs.GameSceneCode.GDDoorway2Objects3);
gdjs.GameSceneCode.GDButtonObjects3.length = 0;


gdjs.GameSceneCode.forEachTemporary3 = gdjs.GameSceneCode.GDButtonObjects2[gdjs.GameSceneCode.forEachIndex3];
gdjs.GameSceneCode.GDButtonObjects3.push(gdjs.GameSceneCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDDoorway2Objects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDDoorway2Objects3[i].getVariableNumber(gdjs.GameSceneCode.GDDoorway2Objects3[i].getVariables().getFromIndex(0)) == ((gdjs.GameSceneCode.GDButtonObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameSceneCode.GDButtonObjects3[0].getVariables()).getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDDoorway2Objects3[k] = gdjs.GameSceneCode.GDDoorway2Objects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDDoorway2Objects3.length = k;
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.GameSceneCode.eventsList6(runtimeScene);} //Subevents end.
}
}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayer1Objects4ObjectsGDgdjs_9546GameSceneCode_9546GDPlayer2Objects4Objects = Hashtable.newFrom({"Player1": gdjs.GameSceneCode.GDPlayer1Objects4, "Player2": gdjs.GameSceneCode.GDPlayer2Objects4});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCoinObjects4Objects = Hashtable.newFrom({"Coin": gdjs.GameSceneCode.GDCoinObjects4});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCoinObjects4Objects = Hashtable.newFrom({"Coin": gdjs.GameSceneCode.GDCoinObjects4});
gdjs.GameSceneCode.eventsList8 = function(runtimeScene) {

};gdjs.GameSceneCode.mapOfEmptyGDCoinObjects = Hashtable.newFrom({"Coin": []});
gdjs.GameSceneCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameSceneCode.GDPlayer1Objects3);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameSceneCode.GDPlayer2Objects3);

gdjs.GameSceneCode.forEachTotalCount4 = 0;
gdjs.GameSceneCode.forEachObjects4.length = 0;
gdjs.GameSceneCode.forEachCount0_4 = gdjs.GameSceneCode.GDPlayer1Objects3.length;
gdjs.GameSceneCode.forEachTotalCount4 += gdjs.GameSceneCode.forEachCount0_4;
gdjs.GameSceneCode.forEachObjects4.push.apply(gdjs.GameSceneCode.forEachObjects4,gdjs.GameSceneCode.GDPlayer1Objects3);
gdjs.GameSceneCode.forEachCount1_4 = gdjs.GameSceneCode.GDPlayer2Objects3.length;
gdjs.GameSceneCode.forEachTotalCount4 += gdjs.GameSceneCode.forEachCount1_4;
gdjs.GameSceneCode.forEachObjects4.push.apply(gdjs.GameSceneCode.forEachObjects4,gdjs.GameSceneCode.GDPlayer2Objects3);
for (gdjs.GameSceneCode.forEachIndex4 = 0;gdjs.GameSceneCode.forEachIndex4 < gdjs.GameSceneCode.forEachTotalCount4;++gdjs.GameSceneCode.forEachIndex4) {
gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.GameSceneCode.GDCoinObjects4);
gdjs.copyArray(runtimeScene.getObjects("Coin_counts"), gdjs.GameSceneCode.GDCoin_9595countsObjects4);
gdjs.GameSceneCode.GDPlayer1Objects4.length = 0;

gdjs.GameSceneCode.GDPlayer2Objects4.length = 0;


if (gdjs.GameSceneCode.forEachIndex4 < gdjs.GameSceneCode.forEachCount0_4) {
    gdjs.GameSceneCode.GDPlayer1Objects4.push(gdjs.GameSceneCode.forEachObjects4[gdjs.GameSceneCode.forEachIndex4]);
}
else if (gdjs.GameSceneCode.forEachIndex4 < gdjs.GameSceneCode.forEachCount0_4+gdjs.GameSceneCode.forEachCount1_4) {
    gdjs.GameSceneCode.GDPlayer2Objects4.push(gdjs.GameSceneCode.forEachObjects4[gdjs.GameSceneCode.forEachIndex4]);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayer1Objects4ObjectsGDgdjs_9546GameSceneCode_9546GDPlayer2Objects4Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCoinObjects4Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameSceneCode.GDCoinObjects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDCoinObjects4[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer1Objects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer1Objects4[i].returnVariable(gdjs.GameSceneCode.GDPlayer1Objects4[i].getVariables().get("PitchModifier")).add(0.05);
}
for(var i = 0, len = gdjs.GameSceneCode.GDPlayer2Objects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer2Objects4[i].returnVariable(gdjs.GameSceneCode.GDPlayer2Objects4[i].getVariables().get("PitchModifier")).add(0.05);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Coin", false, 50, ((gdjs.GameSceneCode.GDPlayer2Objects4.length === 0 ) ? ((gdjs.GameSceneCode.GDPlayer1Objects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameSceneCode.GDPlayer1Objects4[0].getVariables()) : gdjs.GameSceneCode.GDPlayer2Objects4[0].getVariables()).get("PitchModifier").getAsNumber());
}{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer1Objects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer1Objects4[i].resetTimer("Pitch");
}
for(var i = 0, len = gdjs.GameSceneCode.GDPlayer2Objects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer2Objects4[i].resetTimer("Pitch");
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDCoin_9595countsObjects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDCoin_9595countsObjects4[i].getBehavior("Text").setText("Coins Remaining: " + gdjs.evtTools.common.toString(gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCoinObjects4Objects)));
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameSceneCode.GDPlayer1Objects3);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameSceneCode.GDPlayer2Objects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPlayer1Objects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDPlayer1Objects3[i].getTimerElapsedTimeInSecondsOrNaN("Pitch") >= 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPlayer1Objects3[k] = gdjs.GameSceneCode.GDPlayer1Objects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPlayer1Objects3.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPlayer2Objects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDPlayer2Objects3[i].getTimerElapsedTimeInSecondsOrNaN("Pitch") >= 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPlayer2Objects3[k] = gdjs.GameSceneCode.GDPlayer2Objects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPlayer2Objects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDPlayer1Objects3 */
/* Reuse gdjs.GameSceneCode.GDPlayer2Objects3 */
{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer1Objects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer1Objects3[i].returnVariable(gdjs.GameSceneCode.GDPlayer1Objects3[i].getVariables().get("PitchModifier")).setNumber(0.8);
}
for(var i = 0, len = gdjs.GameSceneCode.GDPlayer2Objects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer2Objects3[i].returnVariable(gdjs.GameSceneCode.GDPlayer2Objects3[i].getVariables().get("PitchModifier")).setNumber(0.8);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Coin_counts"), gdjs.GameSceneCode.GDCoin_9595countsObjects2);
{for(var i = 0, len = gdjs.GameSceneCode.GDCoin_9595countsObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDCoin_9595countsObjects2[i].getBehavior("Text").setText("Coins Remaining: " + gdjs.evtTools.common.toString(gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfEmptyGDCoinObjects)));
}
}}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayer1Objects4ObjectsGDgdjs_9546GameSceneCode_9546GDPlayer2Objects4Objects = Hashtable.newFrom({"Player1": gdjs.GameSceneCode.GDPlayer1Objects4, "Player2": gdjs.GameSceneCode.GDPlayer2Objects4});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDSpikesObjects4Objects = Hashtable.newFrom({"Spikes": gdjs.GameSceneCode.GDSpikesObjects4});
gdjs.GameSceneCode.asyncCallback13385916 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameSceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player1"), gdjs.GameSceneCode.GDPlayer1Objects5);

gdjs.copyArray(asyncObjectsList.getObjects("Player2"), gdjs.GameSceneCode.GDPlayer2Objects5);

gdjs.copyArray(runtimeScene.getObjects("RestartPoint"), gdjs.GameSceneCode.GDRestartPointObjects5);
{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer1Objects5.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer1Objects5[i].setPosition((( gdjs.GameSceneCode.GDRestartPointObjects5.length === 0 ) ? 0 :gdjs.GameSceneCode.GDRestartPointObjects5[0].getPointX("")),(( gdjs.GameSceneCode.GDRestartPointObjects5.length === 0 ) ? 0 :gdjs.GameSceneCode.GDRestartPointObjects5[0].getPointY("")));
}
for(var i = 0, len = gdjs.GameSceneCode.GDPlayer2Objects5.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer2Objects5[i].setPosition((( gdjs.GameSceneCode.GDRestartPointObjects5.length === 0 ) ? 0 :gdjs.GameSceneCode.GDRestartPointObjects5[0].getPointX("")),(( gdjs.GameSceneCode.GDRestartPointObjects5.length === 0 ) ? 0 :gdjs.GameSceneCode.GDRestartPointObjects5[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer1Objects5.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer1Objects5[i].activateBehavior("PlatformerObject", true);
}
for(var i = 0, len = gdjs.GameSceneCode.GDPlayer2Objects5.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer2Objects5[i].activateBehavior("PlatformerObject", true);
}
}gdjs.GameSceneCode.localVariables.length = 0;
}
gdjs.GameSceneCode.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameSceneCode.localVariables);
for (const obj of gdjs.GameSceneCode.GDPlayer1Objects4) asyncObjectsList.addObject("Player1", obj);
for (const obj of gdjs.GameSceneCode.GDPlayer2Objects4) asyncObjectsList.addObject("Player2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.GameSceneCode.asyncCallback13385916(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameSceneCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameSceneCode.GDPlayer1Objects3, gdjs.GameSceneCode.GDPlayer1Objects4);

gdjs.copyArray(gdjs.GameSceneCode.GDPlayer2Objects3, gdjs.GameSceneCode.GDPlayer2Objects4);

gdjs.copyArray(runtimeScene.getObjects("Spikes"), gdjs.GameSceneCode.GDSpikesObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayer1Objects4ObjectsGDgdjs_9546GameSceneCode_9546GDPlayer2Objects4Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDSpikesObjects4Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDPlayer1Objects4 */
/* Reuse gdjs.GameSceneCode.GDPlayer2Objects4 */
{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer1Objects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer1Objects4[i].getBehavior("Animation").setAnimationName("Death");
}
for(var i = 0, len = gdjs.GameSceneCode.GDPlayer2Objects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer2Objects4[i].getBehavior("Animation").setAnimationName("Death");
}
}}

}


{

gdjs.copyArray(gdjs.GameSceneCode.GDPlayer1Objects3, gdjs.GameSceneCode.GDPlayer1Objects4);

gdjs.copyArray(gdjs.GameSceneCode.GDPlayer2Objects3, gdjs.GameSceneCode.GDPlayer2Objects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPlayer1Objects4.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDPlayer1Objects4[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPlayer1Objects4[k] = gdjs.GameSceneCode.GDPlayer1Objects4[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPlayer1Objects4.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPlayer2Objects4.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDPlayer2Objects4[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPlayer2Objects4[k] = gdjs.GameSceneCode.GDPlayer2Objects4[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPlayer2Objects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPlayer1Objects4.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDPlayer1Objects4[i].getBehavior("Animation").getAnimationName() == "Death" ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPlayer1Objects4[k] = gdjs.GameSceneCode.GDPlayer1Objects4[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPlayer1Objects4.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPlayer2Objects4.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDPlayer2Objects4[i].getBehavior("Animation").getAnimationName() == "Death" ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPlayer2Objects4[k] = gdjs.GameSceneCode.GDPlayer2Objects4[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPlayer2Objects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13385756);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDPlayer1Objects4 */
/* Reuse gdjs.GameSceneCode.GDPlayer2Objects4 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\Death.wav", false, 50, 1);
}{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer1Objects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer1Objects4[i].activateBehavior("PlatformerObject", false);
}
for(var i = 0, len = gdjs.GameSceneCode.GDPlayer2Objects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer2Objects4[i].activateBehavior("PlatformerObject", false);
}
}
{ //Subevents
gdjs.GameSceneCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.GameSceneCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameSceneCode.GDPlayer1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameSceneCode.GDPlayer2Objects2);

gdjs.GameSceneCode.forEachTotalCount3 = 0;
gdjs.GameSceneCode.forEachObjects3.length = 0;
gdjs.GameSceneCode.forEachCount0_3 = gdjs.GameSceneCode.GDPlayer1Objects2.length;
gdjs.GameSceneCode.forEachTotalCount3 += gdjs.GameSceneCode.forEachCount0_3;
gdjs.GameSceneCode.forEachObjects3.push.apply(gdjs.GameSceneCode.forEachObjects3,gdjs.GameSceneCode.GDPlayer1Objects2);
gdjs.GameSceneCode.forEachCount1_3 = gdjs.GameSceneCode.GDPlayer2Objects2.length;
gdjs.GameSceneCode.forEachTotalCount3 += gdjs.GameSceneCode.forEachCount1_3;
gdjs.GameSceneCode.forEachObjects3.push.apply(gdjs.GameSceneCode.forEachObjects3,gdjs.GameSceneCode.GDPlayer2Objects2);
for (gdjs.GameSceneCode.forEachIndex3 = 0;gdjs.GameSceneCode.forEachIndex3 < gdjs.GameSceneCode.forEachTotalCount3;++gdjs.GameSceneCode.forEachIndex3) {
gdjs.GameSceneCode.GDPlayer1Objects3.length = 0;

gdjs.GameSceneCode.GDPlayer2Objects3.length = 0;


if (gdjs.GameSceneCode.forEachIndex3 < gdjs.GameSceneCode.forEachCount0_3) {
    gdjs.GameSceneCode.GDPlayer1Objects3.push(gdjs.GameSceneCode.forEachObjects3[gdjs.GameSceneCode.forEachIndex3]);
}
else if (gdjs.GameSceneCode.forEachIndex3 < gdjs.GameSceneCode.forEachCount0_3+gdjs.GameSceneCode.forEachCount1_3) {
    gdjs.GameSceneCode.GDPlayer2Objects3.push(gdjs.GameSceneCode.forEachObjects3[gdjs.GameSceneCode.forEachIndex3]);
}
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.GameSceneCode.eventsList11(runtimeScene);} //Subevents end.
}
}

}


};gdjs.GameSceneCode.mapOfEmptyGDCoinObjects = Hashtable.newFrom({"Coin": []});
gdjs.GameSceneCode.asyncCallback13388860 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameSceneCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.GameSceneCode.GDDoorObjects3);
{for(var i = 0, len = gdjs.GameSceneCode.GDDoorObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDDoorObjects3[i].getBehavior("Animation").setAnimationName("Opened");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Door Opening", false, 100, 1);
}gdjs.GameSceneCode.localVariables.length = 0;
}
gdjs.GameSceneCode.eventsList13 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameSceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.GameSceneCode.asyncCallback13388860(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameSceneCode.eventsList14 = function(runtimeScene) {

};gdjs.GameSceneCode.mapOfEmptyGDPlayer1ObjectsEmptyGDPlayer2Objects = Hashtable.newFrom({"Player1": [], "Player2": []});
gdjs.GameSceneCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13388700);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameSceneCode.eventsList13(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameSceneCode.GDPlayer1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameSceneCode.GDPlayer2Objects2);

gdjs.GameSceneCode.forEachTotalCount3 = 0;
gdjs.GameSceneCode.forEachObjects3.length = 0;
gdjs.GameSceneCode.forEachCount0_3 = gdjs.GameSceneCode.GDPlayer1Objects2.length;
gdjs.GameSceneCode.forEachTotalCount3 += gdjs.GameSceneCode.forEachCount0_3;
gdjs.GameSceneCode.forEachObjects3.push.apply(gdjs.GameSceneCode.forEachObjects3,gdjs.GameSceneCode.GDPlayer1Objects2);
gdjs.GameSceneCode.forEachCount1_3 = gdjs.GameSceneCode.GDPlayer2Objects2.length;
gdjs.GameSceneCode.forEachTotalCount3 += gdjs.GameSceneCode.forEachCount1_3;
gdjs.GameSceneCode.forEachObjects3.push.apply(gdjs.GameSceneCode.forEachObjects3,gdjs.GameSceneCode.GDPlayer2Objects2);
for (gdjs.GameSceneCode.forEachIndex3 = 0;gdjs.GameSceneCode.forEachIndex3 < gdjs.GameSceneCode.forEachTotalCount3;++gdjs.GameSceneCode.forEachIndex3) {
gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.GameSceneCode.GDDoorObjects3);
gdjs.GameSceneCode.GDPlayer1Objects3.length = 0;

gdjs.GameSceneCode.GDPlayer2Objects3.length = 0;


if (gdjs.GameSceneCode.forEachIndex3 < gdjs.GameSceneCode.forEachCount0_3) {
    gdjs.GameSceneCode.GDPlayer1Objects3.push(gdjs.GameSceneCode.forEachObjects3[gdjs.GameSceneCode.forEachIndex3]);
}
else if (gdjs.GameSceneCode.forEachIndex3 < gdjs.GameSceneCode.forEachCount0_3+gdjs.GameSceneCode.forEachCount1_3) {
    gdjs.GameSceneCode.GDPlayer2Objects3.push(gdjs.GameSceneCode.forEachObjects3[gdjs.GameSceneCode.forEachIndex3]);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDDoorObjects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDDoorObjects3[i].isCollidingWithPoint((( gdjs.GameSceneCode.GDPlayer2Objects3.length === 0 ) ? (( gdjs.GameSceneCode.GDPlayer1Objects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDPlayer1Objects3[0].getCenterXInScene()) :gdjs.GameSceneCode.GDPlayer2Objects3[0].getCenterXInScene()), (( gdjs.GameSceneCode.GDPlayer2Objects3.length === 0 ) ? (( gdjs.GameSceneCode.GDPlayer1Objects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDPlayer1Objects3[0].getCenterYInScene()) :gdjs.GameSceneCode.GDPlayer2Objects3[0].getCenterYInScene())) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDDoorObjects3[k] = gdjs.GameSceneCode.GDDoorObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDDoorObjects3.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameSceneCode.GDPlayer1Objects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer1Objects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameSceneCode.GDPlayer2Objects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayer2Objects3[i].deleteFromScene(runtimeScene);
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.GameSceneCode.GDDoorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDDoorObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDDoorObjects1[i].getBehavior("Animation").getAnimationName() == "Opened" ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDDoorObjects1[k] = gdjs.GameSceneCode.GDDoorObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDDoorObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfEmptyGDPlayer1ObjectsEmptyGDPlayer2Objects) <= 0;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game End", false);
}}

}


};gdjs.GameSceneCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfEmptyGDCoinObjects) <= 0;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameSceneCode.eventsList15(runtimeScene);} //End of subevents
}

}


};gdjs.GameSceneCode.eventsList17 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.GameSceneCode.GDPlayer1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.GameSceneCode.GDPlayer2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPlayer1Objects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDPlayer1Objects2[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPlayer1Objects2[k] = gdjs.GameSceneCode.GDPlayer1Objects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPlayer1Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPlayer2Objects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDPlayer2Objects2[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPlayer2Objects2[k] = gdjs.GameSceneCode.GDPlayer2Objects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPlayer2Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDPlayer1Objects2 */
/* Reuse gdjs.GameSceneCode.GDPlayer2Objects2 */
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.GameSceneCode.GDPlayer1Objects2.length !== 0 ? gdjs.GameSceneCode.GDPlayer1Objects2[0] : (gdjs.GameSceneCode.GDPlayer2Objects2.length !== 0 ? gdjs.GameSceneCode.GDPlayer2Objects2[0] : null)), true, "", 0);
}}

}


{


gdjs.GameSceneCode.eventsList7(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList9(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList12(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList16(runtimeScene);
}


};gdjs.GameSceneCode.eventsList18 = function(runtimeScene) {

{


gdjs.GameSceneCode.eventsList1(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList3(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList17(runtimeScene);
}


};

gdjs.GameSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameSceneCode.GDPlayer1Objects1.length = 0;
gdjs.GameSceneCode.GDPlayer1Objects2.length = 0;
gdjs.GameSceneCode.GDPlayer1Objects3.length = 0;
gdjs.GameSceneCode.GDPlayer1Objects4.length = 0;
gdjs.GameSceneCode.GDPlayer1Objects5.length = 0;
gdjs.GameSceneCode.GDTilesObjects1.length = 0;
gdjs.GameSceneCode.GDTilesObjects2.length = 0;
gdjs.GameSceneCode.GDTilesObjects3.length = 0;
gdjs.GameSceneCode.GDTilesObjects4.length = 0;
gdjs.GameSceneCode.GDTilesObjects5.length = 0;
gdjs.GameSceneCode.GDCoinObjects1.length = 0;
gdjs.GameSceneCode.GDCoinObjects2.length = 0;
gdjs.GameSceneCode.GDCoinObjects3.length = 0;
gdjs.GameSceneCode.GDCoinObjects4.length = 0;
gdjs.GameSceneCode.GDCoinObjects5.length = 0;
gdjs.GameSceneCode.GDCoin_9595countsObjects1.length = 0;
gdjs.GameSceneCode.GDCoin_9595countsObjects2.length = 0;
gdjs.GameSceneCode.GDCoin_9595countsObjects3.length = 0;
gdjs.GameSceneCode.GDCoin_9595countsObjects4.length = 0;
gdjs.GameSceneCode.GDCoin_9595countsObjects5.length = 0;
gdjs.GameSceneCode.GDRestartPointObjects1.length = 0;
gdjs.GameSceneCode.GDRestartPointObjects2.length = 0;
gdjs.GameSceneCode.GDRestartPointObjects3.length = 0;
gdjs.GameSceneCode.GDRestartPointObjects4.length = 0;
gdjs.GameSceneCode.GDRestartPointObjects5.length = 0;
gdjs.GameSceneCode.GDButtonObjects1.length = 0;
gdjs.GameSceneCode.GDButtonObjects2.length = 0;
gdjs.GameSceneCode.GDButtonObjects3.length = 0;
gdjs.GameSceneCode.GDButtonObjects4.length = 0;
gdjs.GameSceneCode.GDButtonObjects5.length = 0;
gdjs.GameSceneCode.GDSpikesObjects1.length = 0;
gdjs.GameSceneCode.GDSpikesObjects2.length = 0;
gdjs.GameSceneCode.GDSpikesObjects3.length = 0;
gdjs.GameSceneCode.GDSpikesObjects4.length = 0;
gdjs.GameSceneCode.GDSpikesObjects5.length = 0;
gdjs.GameSceneCode.GDDoorway2Objects1.length = 0;
gdjs.GameSceneCode.GDDoorway2Objects2.length = 0;
gdjs.GameSceneCode.GDDoorway2Objects3.length = 0;
gdjs.GameSceneCode.GDDoorway2Objects4.length = 0;
gdjs.GameSceneCode.GDDoorway2Objects5.length = 0;
gdjs.GameSceneCode.GDDoorObjects1.length = 0;
gdjs.GameSceneCode.GDDoorObjects2.length = 0;
gdjs.GameSceneCode.GDDoorObjects3.length = 0;
gdjs.GameSceneCode.GDDoorObjects4.length = 0;
gdjs.GameSceneCode.GDDoorObjects5.length = 0;
gdjs.GameSceneCode.GDPlayer2Objects1.length = 0;
gdjs.GameSceneCode.GDPlayer2Objects2.length = 0;
gdjs.GameSceneCode.GDPlayer2Objects3.length = 0;
gdjs.GameSceneCode.GDPlayer2Objects4.length = 0;
gdjs.GameSceneCode.GDPlayer2Objects5.length = 0;
gdjs.GameSceneCode.GDRightArrowButtonObjects1.length = 0;
gdjs.GameSceneCode.GDRightArrowButtonObjects2.length = 0;
gdjs.GameSceneCode.GDRightArrowButtonObjects3.length = 0;
gdjs.GameSceneCode.GDRightArrowButtonObjects4.length = 0;
gdjs.GameSceneCode.GDRightArrowButtonObjects5.length = 0;
gdjs.GameSceneCode.GDLeftArrowButtonObjects1.length = 0;
gdjs.GameSceneCode.GDLeftArrowButtonObjects2.length = 0;
gdjs.GameSceneCode.GDLeftArrowButtonObjects3.length = 0;
gdjs.GameSceneCode.GDLeftArrowButtonObjects4.length = 0;
gdjs.GameSceneCode.GDLeftArrowButtonObjects5.length = 0;
gdjs.GameSceneCode.GDJumpArrowButtonObjects1.length = 0;
gdjs.GameSceneCode.GDJumpArrowButtonObjects2.length = 0;
gdjs.GameSceneCode.GDJumpArrowButtonObjects3.length = 0;
gdjs.GameSceneCode.GDJumpArrowButtonObjects4.length = 0;
gdjs.GameSceneCode.GDJumpArrowButtonObjects5.length = 0;

gdjs.GameSceneCode.eventsList18(runtimeScene);
gdjs.GameSceneCode.GDPlayer1Objects1.length = 0;
gdjs.GameSceneCode.GDPlayer1Objects2.length = 0;
gdjs.GameSceneCode.GDPlayer1Objects3.length = 0;
gdjs.GameSceneCode.GDPlayer1Objects4.length = 0;
gdjs.GameSceneCode.GDPlayer1Objects5.length = 0;
gdjs.GameSceneCode.GDTilesObjects1.length = 0;
gdjs.GameSceneCode.GDTilesObjects2.length = 0;
gdjs.GameSceneCode.GDTilesObjects3.length = 0;
gdjs.GameSceneCode.GDTilesObjects4.length = 0;
gdjs.GameSceneCode.GDTilesObjects5.length = 0;
gdjs.GameSceneCode.GDCoinObjects1.length = 0;
gdjs.GameSceneCode.GDCoinObjects2.length = 0;
gdjs.GameSceneCode.GDCoinObjects3.length = 0;
gdjs.GameSceneCode.GDCoinObjects4.length = 0;
gdjs.GameSceneCode.GDCoinObjects5.length = 0;
gdjs.GameSceneCode.GDCoin_9595countsObjects1.length = 0;
gdjs.GameSceneCode.GDCoin_9595countsObjects2.length = 0;
gdjs.GameSceneCode.GDCoin_9595countsObjects3.length = 0;
gdjs.GameSceneCode.GDCoin_9595countsObjects4.length = 0;
gdjs.GameSceneCode.GDCoin_9595countsObjects5.length = 0;
gdjs.GameSceneCode.GDRestartPointObjects1.length = 0;
gdjs.GameSceneCode.GDRestartPointObjects2.length = 0;
gdjs.GameSceneCode.GDRestartPointObjects3.length = 0;
gdjs.GameSceneCode.GDRestartPointObjects4.length = 0;
gdjs.GameSceneCode.GDRestartPointObjects5.length = 0;
gdjs.GameSceneCode.GDButtonObjects1.length = 0;
gdjs.GameSceneCode.GDButtonObjects2.length = 0;
gdjs.GameSceneCode.GDButtonObjects3.length = 0;
gdjs.GameSceneCode.GDButtonObjects4.length = 0;
gdjs.GameSceneCode.GDButtonObjects5.length = 0;
gdjs.GameSceneCode.GDSpikesObjects1.length = 0;
gdjs.GameSceneCode.GDSpikesObjects2.length = 0;
gdjs.GameSceneCode.GDSpikesObjects3.length = 0;
gdjs.GameSceneCode.GDSpikesObjects4.length = 0;
gdjs.GameSceneCode.GDSpikesObjects5.length = 0;
gdjs.GameSceneCode.GDDoorway2Objects1.length = 0;
gdjs.GameSceneCode.GDDoorway2Objects2.length = 0;
gdjs.GameSceneCode.GDDoorway2Objects3.length = 0;
gdjs.GameSceneCode.GDDoorway2Objects4.length = 0;
gdjs.GameSceneCode.GDDoorway2Objects5.length = 0;
gdjs.GameSceneCode.GDDoorObjects1.length = 0;
gdjs.GameSceneCode.GDDoorObjects2.length = 0;
gdjs.GameSceneCode.GDDoorObjects3.length = 0;
gdjs.GameSceneCode.GDDoorObjects4.length = 0;
gdjs.GameSceneCode.GDDoorObjects5.length = 0;
gdjs.GameSceneCode.GDPlayer2Objects1.length = 0;
gdjs.GameSceneCode.GDPlayer2Objects2.length = 0;
gdjs.GameSceneCode.GDPlayer2Objects3.length = 0;
gdjs.GameSceneCode.GDPlayer2Objects4.length = 0;
gdjs.GameSceneCode.GDPlayer2Objects5.length = 0;
gdjs.GameSceneCode.GDRightArrowButtonObjects1.length = 0;
gdjs.GameSceneCode.GDRightArrowButtonObjects2.length = 0;
gdjs.GameSceneCode.GDRightArrowButtonObjects3.length = 0;
gdjs.GameSceneCode.GDRightArrowButtonObjects4.length = 0;
gdjs.GameSceneCode.GDRightArrowButtonObjects5.length = 0;
gdjs.GameSceneCode.GDLeftArrowButtonObjects1.length = 0;
gdjs.GameSceneCode.GDLeftArrowButtonObjects2.length = 0;
gdjs.GameSceneCode.GDLeftArrowButtonObjects3.length = 0;
gdjs.GameSceneCode.GDLeftArrowButtonObjects4.length = 0;
gdjs.GameSceneCode.GDLeftArrowButtonObjects5.length = 0;
gdjs.GameSceneCode.GDJumpArrowButtonObjects1.length = 0;
gdjs.GameSceneCode.GDJumpArrowButtonObjects2.length = 0;
gdjs.GameSceneCode.GDJumpArrowButtonObjects3.length = 0;
gdjs.GameSceneCode.GDJumpArrowButtonObjects4.length = 0;
gdjs.GameSceneCode.GDJumpArrowButtonObjects5.length = 0;


return;

}

gdjs['GameSceneCode'] = gdjs.GameSceneCode;
