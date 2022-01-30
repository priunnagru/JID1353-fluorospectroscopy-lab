/* This source code is exported from pxCode, you can get more document from https://www.pxcode.io */
import React from 'react';
import cn from 'classnames';
import { Px } from './posize';
import { Link } from 'react-router-dom';
import { Button, Typography, Box } from '@mui/material';

import styles from './Menu.module.scss';

export default function Menu(props) {
  return (
    <div className={`menu ${cn(styles.block_layout, styles.block)}`}>
      <h1 className={cn(styles.hero_title_box_layout, styles.hero_title_box)}>
        <pre className={cn(styles.hero_title)}>
          {'Fluorescence Spectroscopy \nVirtual Lab'}
        </pre>
      </h1>

      <div className={cn(styles.flex_layout, styles.flex)}>
        <div className={cn(styles.flex1_layout, styles.flex1)}>
          <div className={cn(styles.flex1_item)}>
            <div
              style={{
                '--src': `url(${
                  require('assets/7bd9e13d00e302153e345908cc803c9b.png').default
                })`
              }}
              className={cn(styles.image_layout, styles.image)}
            />
          </div>
          <div className={cn(styles.flex1_spacer)} />
          <div className={cn(styles.flex1_item1)}>
            <div className={cn(styles.flex2_layout, styles.flex2)}>
              <img
                src={
                  require('assets/63bf912744d0f07fcda970cfb8b8ba5a.png').default
                }
                className={cn(styles.cover_block2_layout, styles.cover_block2)}
              />
              <h2
                className={cn(styles.medium_title_layout, styles.medium_title)}>
                {'Settings'}
              </h2>
            </div>
          </div>
          <div className={cn(styles.flex1_spacer1)} />
          <div className={cn(styles.flex1_item2)}>
            <div className={cn(styles.flex3_layout, styles.flex3)}>
              <Button variant="contained" component={Link} to="/tutorial"
                
                className={cn(styles.cover_block1_layout, styles.cover_block1)}
              ><img src={
                require('assets/b95758046d28130163d3e992661a127a.png').default
              } className={cn(styles.cover_block1_layout, styles.cover_block1)}
              ></img> 
              </Button>
              <h2
                className={cn(
                  styles.medium_title_layout1,
                  styles.medium_title
                )}>
                {'Tutorial'}
              </h2>
            </div>
          </div>
        </div>

        <Px.img
          src={require('assets/66d542c8e27b1c901055e6f9b7c225bb.png').default}
          x="613px 232fr 633fr"
          y="425px minmax(0px, max-content) 0px"
          areaStyle={{
            ':before': {
              content: '" "',
              display: 'inline-block',
              height: '100%',
              verticalAlign: 'middle'
            }
          }}
          className={cn(styles.content_box)}
          lgX="613px 232fr 633fr"
          lgY="328px minmax(0px, max-content) 0px"
          mdX="613px 232fr 633fr"
          mdY="222px minmax(0px, max-content) 0px"
          smX="613px 232fr 633fr"
          smY="132px minmax(0px, max-content) 0px"
          xsX="613px 232fr 633fr"
          xsY="87px minmax(0px, max-content) 0px"
          xxsX="613px 232fr 633fr"
          xxsY="42px minmax(0px, max-content) 0px"
          tnX="613px 232fr 633fr"
          tnY="11px minmax(0px, max-content) 0px"
        />

        <div className={cn(styles.flex4_layout, styles.flex4)}>
          <div className={cn(styles.flex4_item)}>
            <img
              src={
                require('assets/abbe25aef655033af41208c3774db2ae.png').default
              }
              className={cn(styles.block1_layout, styles.block1)}
            />
          </div>
          <div className={cn(styles.flex4_spacer)} />
          <h1 className={cn(styles.hero_title2_layout, styles.hero_title2)}>
            {'Virtual Labs'}
          </h1>
        </div>
      </div>
    </div>
  );
}

Menu.inStorybook = true;
