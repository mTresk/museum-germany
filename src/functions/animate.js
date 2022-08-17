import {Elastic, gsap} from 'gsap';
import classNamePlugin from "@/functions/classNamePlugin";

classNamePlugin()

export function animate() {
    const tl = gsap.timeline();
    gsap.config({
        nullTargetWarn: false,
    });

    tl
        .fromTo(
            '.doves',
            {
                className: '-=active',
            },
            {
                className: '+=active',
            }
        )
        .fromTo(
            '.screen__bg',
            {
                scale: 0.8,
                opacity: 0,
            },
            {
                scale: 1,
                opacity: 1,
                duration: 1.5,
            }
        )
        .fromTo(
            '.sound',
            {
                translateY: -100,
                opacity: 0,
            },
            {
                translateY: 0,
                opacity: 1,
            },
            '-=1'
        )
        .fromTo(
            '.screen__logo',
            {
                translateX: 100,
                opacity: 0,
            },
            {
                translateX: 0,
                opacity: 1,
            },
            '-=1'
        )
        .fromTo(
            '.screen__image',
            {
                translateY: 100,
                opacity: 0,
                rotation: 10,
                stagger: 0.2,
            },
            {
                translateY: 0,
                opacity: 1,
                rotation: 0,
                duration: 0.7,
                stagger: 0.2,
            },
            '-=0.8'
        )
        .fromTo(
            '.screen__subtitle',
            {
                translateY: 50,
                opacity: 0,
                stagger: 0.2,
            },
            {
                translateY: 0,
                opacity: 1,
                stagger: 0.2,
            },
            '-=0.3'
        )
        .fromTo(
            '.screen__text',
            {
                translateY: 50,
                opacity: 0,
                stagger: 0.2,
            },
            {
                translateY: 0,
                opacity: 1,
                stagger: 0.2,
            },
            '-=0.3'
        )
        .fromTo(
            '.screen__navigation',
            {
                translateY: 150,
                opacity: 0,
            },
            {
                translateY: 0,
                opacity: 1,
            },
            '-=0.4'
        )
        .fromTo(
            '.screen__feathers',
            {
                scale: 0,
                opacity: 0,
                duration: 1,
            },
            {
                scale: 1,
                opacity: 1,
                ease: Elastic.easeOut.config(1.1, 0.5),
                duration: 3,
            },
            '-=0.5'
        );
}
