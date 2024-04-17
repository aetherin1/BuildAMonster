class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        this.leftEyeX = 335;
        this.leftEyeY = 310;
        this.rightEyeX = 280;
        this.rightEyeY = 310;
        this.mouthX = 300;
        this.mouthY = 400;
        this.rightArmX = 190;
        this.rightArmY = 360;
        this.leftArmX = 395;
        this.leftArmY = 360;
        this.rightLegX = 250;
        this.rightLegY = 500;
        this.leftLegX = 350;
        this.leftLegY = 500;
        this.antenna1X = 340;
        this.antenna1Y = 255; 
        this.antenna2X = 260;
        this.antenna2Y = 255;
        this.antenna3X = 220;
        this.antenna3Y = 270;
        this.antenna4X = 370;
        this.antenna4Y = 275;
        this.antenna5X = 380;
        this.antenna5Y = 550;
        this.antenna6X = 220;
        this.antenna6Y = 550;
        this.antenna7X = 290;
        this.antenna7Y = 250;
        this.antenna8X = 310;
        this.antenna8Y = 250;
        this.noseX = 300;
        this.noseY = 360;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.leftEye = this.add.sprite(this.leftEyeX, this.leftEyeY, "monsterParts", "eye_dead.png");
        my.sprite.rightEye = this.add.sprite(this.rightEyeX, this.rightEyeY, 'monsterParts', "eye_cute_dark.png");
        my.sprite.mouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthH.png");
        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_greenB.png");
        my.sprite.leftArm.angle = -15;
        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_greenA.png");
        my.sprite.rightArm.setScale(-1, 1);
        my.sprite.rightArm.angle = 15;
        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_greenA.png");
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_greenA.png");
        my.sprite.rightLeg.setScale(-1, 1);
        my.sprite.antenna1 = this.add.sprite(this.antenna1X, this.antenna1Y, "monsterParts", "detail_red_antenna_small.png");
        my.sprite.antenna2 = this.add.sprite(this.antenna2X, this.antenna2Y, "monsterParts", "detail_red_antenna_small.png");
        my.sprite.antenna2.setScale(-1, 1);
        my.sprite.antenna3 = this.add.sprite(this.antenna3X, this.antenna3Y, "monsterParts", "detail_red_antenna_small.png");
        my.sprite.antenna4 = this.add.sprite(this.antenna4X, this.antenna4Y, "monsterParts", "detail_red_antenna_small.png");
        my.sprite.antenna4.setScale(-1, 1);
        my.sprite.antenna5 = this.add.sprite(this.antenna5X, this.antenna5Y, "monsterParts", "detail_red_antenna_small.png");
        my.sprite.antenna6 = this.add.sprite(this.antenna6X, this.antenna6Y, "monsterParts", "detail_red_antenna_small.png");
        my.sprite.antenna6.setScale(-1, 1);
        my.sprite.antenna7 = this.add.sprite(this.antenna7X, this.antenna7Y, "monsterParts", "detail_red_antenna_small.png");
        my.sprite.antenna7.angle = -10;
        my.sprite.antenna7.setScale(.9, .9);
        my.sprite.antenna8 = this.add.sprite(this.antenna8X, this.antenna8Y, "monsterParts", "detail_red_antenna_small.png");
        my.sprite.antenna8.setScale(-.9, .9);
        my.sprite.antenna8.angle = 10;
        my.sprite.nose = this.add.sprite(this.noseX, this.noseY, "monsterParts", "nose_brown.png");
        my.sprite.nose.setScale(.8, .8);
        this.keyS = this.input.keyboard.addKey('s');
        this.keyF = this.input.keyboard.addKey('f');
        this.keyA = this.input.keyboard.addKey('a');
        this.keyD = this.input.keyboard.addKey('d');
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if (this.keyS.isDown) {
            my.sprite.mouth.destroy(true);
            my.sprite.mouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthH.png");
        } else if(this.keyF.isDown) {
            my.sprite.mouth.destroy(true);
            my.sprite.mouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_fangs.png");
            my.sprite.mouth.angle = 180;
        }
        if (this.keyA.isDown) {
            for (const key in this.my.sprite) {
                this.my.sprite[key].x -= 5;
            }
        } else if (this.keyD.isDown) {
            for (const key in this.my.sprite) {
                this.my.sprite[key].x += 5;
            }
        }
        
    }

}
