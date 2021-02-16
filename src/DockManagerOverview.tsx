import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import TreeView from '@material-ui/lab/TreeView';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import './DockManagerStyles.css';

import { IgcDockManagerComponent, IgcContentPane } from "igniteui-dockmanager";
import { IgcDockManagerPaneType, IgcSplitPaneOrientation } from "igniteui-dockmanager";
import { defineCustomElements } from "igniteui-dockmanager/loader";

/* eslint-disable */
declare global {
    namespace JSX {
        // tslint:disable-next-line:interface-name
        interface IntrinsicElements {
            "igc-dockmanager": any;
        }
    }
}
/* eslint-enable */

defineCustomElements();

export default class DockManagerOverview extends React.Component {

    public dockManager: IgcDockManagerComponent;

    public render(): JSX.Element {
        var marginStyle = {
            margin: "1em"
        };
        return (
            <div className="igContainer">
                <igc-dockmanager id="dockManager">
                    <div slot="content1" className="dockManagerContent">
                        <TreeView
                        defaultCollapseIcon={<ExpandMoreIcon />}
                        defaultExpandIcon={<ChevronRightIcon />}
                        >
                            <TreeItem nodeId="1" label="Applications">
                                <TreeItem nodeId="2" label="Calendar" />
                                <TreeItem nodeId="3" label="Chrome" />
                                <TreeItem nodeId="4" label="Webstorm" />
                            </TreeItem>
                            <TreeItem nodeId="5" label="Documents">
                                <TreeItem nodeId="10" label="OSS" />
                                <TreeItem nodeId="6" label="Material-UI">
                                <TreeItem nodeId="7" label="src">
                                    <TreeItem nodeId="8" label="index.js" />
                                    <TreeItem nodeId="9" label="tree-view.js" />
                                </TreeItem>
                                </TreeItem>
                            </TreeItem>
                        </TreeView>
                    </div>
                    <div slot="content2" className="dockManagerContent">
                        <Timeline>
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>Eat</TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>Code</TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot />
                                </TimelineSeparator>
                                <TimelineContent>Sleep</TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </div>
                    <div slot="content3" className="dockManagerContent">
                        <div>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography>Accordion 1</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography>Accordion 2</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion disabled>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                            >
                            <Typography>Disabled Accordion</Typography>
                            </AccordionSummary>
                        </Accordion>
                        </div>
                    </div>
                    <div slot="content4" className="dockManagerContent">

                    </div>
                    <div slot="content5" className="dockManagerContent">

                    </div>
                    <div slot="content6" className="dockManagerContent">
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                <Avatar>
                                    <ImageIcon />
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                <Avatar>
                                    <WorkIcon />
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Work" secondary="Jan 7, 2014" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                <Avatar>
                                    <BeachAccessIcon />
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Vacation" secondary="July 20, 2014" />
                            </ListItem>
                        </List>
                    </div>
                    <div slot="content7" className="dockManagerContent">

                    </div>
                    <div slot="content8" className="dockManagerContent">
                        <form noValidate autoComplete="off">
                            <TextField
                                id="filled-secondary"
                                label="Filled secondary"
                                variant="filled"
                                color="secondary"
                                style={marginStyle}
                            />
                            <TextField
                                id="outlined-secondary"
                                label="Outlined secondary"
                                variant="outlined"
                                color="secondary"
                                style={marginStyle}
                            />
                        </form>
                    </div>
                    <div slot="content9" className="dockManagerContent">
                        <Button variant="contained" color="primary">
                        Hello World
                        </Button>
                    </div>
                </igc-dockmanager>
            </div>
        );
    }

    public createContentPane(contentID: string, paneHeader: string): any {
        const pane = {
            // size: 150,
            header: paneHeader,
            type: IgcDockManagerPaneType.contentPane,
            contentId: contentID
        };
        return pane;
    }

    public createSplitPane(orientation: IgcSplitPaneOrientation, contentPanes: any[], size?: number): any {
        const pane =  {
            type: IgcDockManagerPaneType.splitPane,
            orientation: orientation,
            panes: contentPanes,
            size: size
        };
        return pane;
    }

    public createTabPane(orientation: IgcSplitPaneOrientation, contentPanes: any[], size?: number): any {
        const pane =  {
            type: IgcDockManagerPaneType.documentHost,
            size: size,
            rootPane: {
                type: IgcDockManagerPaneType.splitPane,
                orientation: orientation,
                panes: [
                    {
                        type: IgcDockManagerPaneType.tabGroupPane,
                        panes: contentPanes
                    }
                ]
            }
        };
        return pane;
    }


    public componentDidMount() {

        const pane1 = this.createContentPane('content1', 'Content Pane 1');
        const pane2 = this.createContentPane('content2', 'Unpinned Pane 1');
        pane2.isPinned = false;

        const pane3 = this.createContentPane('content3', 'Document 1');
        const pane4 = this.createContentPane('content4', 'Document 2');

        const contentPane5 = this.createContentPane('content5', 'Unpinned Pane 2');
        contentPane5.isPinned = false;

        const pane6 = this.createContentPane('content6', 'Tab 1');
        const pane7 = this.createContentPane('content7', 'Tab 2');
        const pane8 = this.createContentPane('content8', 'Content Pane 2');
        const pane9 = this.createContentPane('content9', 'Floating Pane');

        const tabPane1 = this.createTabPane(IgcSplitPaneOrientation.horizontal, [ pane3, pane4 ], 200);

        const splitPane1 = this.createSplitPane(IgcSplitPaneOrientation.vertical, [ pane1, pane2 ]);
        const splitPane2 = this.createSplitPane(IgcSplitPaneOrientation.vertical, [ tabPane1, contentPane5 ], 200);

        this.dockManager = document.getElementById("dockManager") as IgcDockManagerComponent;
        this.dockManager.layout = {
            rootPane: {
                type: IgcDockManagerPaneType.splitPane,
                orientation: IgcSplitPaneOrientation.horizontal,
                panes: [
                    splitPane1, // or:
                    // {
                    //     type: IgcDockManagerPaneType.splitPane,
                    //     orientation: IgcSplitPaneOrientation.vertical,
                    //     panes: [ pane1, pane2 ]
                    // },
                    splitPane2, // or:
                    // {
                    //     type: IgcDockManagerPaneType.splitPane,
                    //     orientation: IgcSplitPaneOrientation.vertical,
                    //     size: 200,
                    //     panes: [
                    //         tabPane1,
                    //         contentPane5
                    //     ]
                    // },
                    {
                        type: IgcDockManagerPaneType.splitPane,
                        orientation: IgcSplitPaneOrientation.vertical,
                        panes: [
                            {
                                type: IgcDockManagerPaneType.tabGroupPane,
                                size: 200,
                                panes: [ pane6, pane7 ]
                            },
                            pane8
                        ]
                    }
                ]
            },
            floatingPanes: [
                {
                    type: IgcDockManagerPaneType.splitPane,
                    orientation: IgcSplitPaneOrientation.horizontal,
                    floatingHeight: 150,
                    floatingWidth: 250,
                    floatingLocation: { x: 300, y: 200 },
                    panes: [ pane9 ]
                }
            ]
        };
    }

}
