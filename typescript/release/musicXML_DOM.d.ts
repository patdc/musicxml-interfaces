declare module "musicxml-interfaces" {
    export interface AccOrText {
        acc?: AccidentalText;
        text?: DisplayText;
    }
    export interface TextArray extends Array<AccOrText> {
    }
    export interface EncodingDate extends CalendarDate {
    }
    export function parseXML(musicxmlBuffer: string): ScoreTimewise;
    export function getString(ch: Node, required: boolean): string;
    export function getNumber(ch: Node, required: boolean): number;
    export function xmlToTextArray(node: Node): TextArray;
    export function toCamelCase(input: string): string;
    export function xmlToEncodingDate(node: Node): CalendarDate;
    export function xmlToMeasure(node: Node): Measure;
    export function xmlToYesNo(p: Node, required?: boolean): boolean;
    export function xmlToNoteheadText(p: Node): NoteheadText;
    export function xmlToPartNameDisplay(p: Node): PartNameDisplay;
    export function xmlToPartAbbreviationDisplay(p: Node): PartAbbreviationDisplay;
    export interface Mode extends String {
    }
    export function xmlToMode(node: Node): Mode;
    export interface OtherAppearance extends String {
    }
    export function xmlToOtherAppearance(node: Node): OtherAppearance;
    export interface TuningStep extends String {
    }
    export function xmlToTuningStep(node: Node): TuningStep;
    export interface OtherDynamics extends String {
    }
    export function xmlToOtherDynamics(node: Node): OtherDynamics;
    export interface Voice extends String {
    }
    export function xmlToVoice(node: Node): Voice;
    export interface NormalType extends String {
    }
    export function xmlToNormalType(node: Node): NormalType;
    export interface Software extends String {
    }
    export function xmlToSoftware(node: Node): Software;
    export interface EncodingDescription extends String {
    }
    export function xmlToEncodingDescription(node: Node): EncodingDescription;
    export interface KeyStep extends String {
    }
    export function xmlToKeyStep(node: Node): KeyStep;
    export interface KeyAlter extends String {
    }
    export function xmlToKeyAlter(node: Node): KeyAlter;
    export interface KeyAccidental extends String {
    }
    export function xmlToKeyAccidental(node: Node): KeyAccidental;
    export interface Beats extends String {
    }
    export function xmlToBeats(node: Node): Beats;
    export interface BeatType extends String {
    }
    export function xmlToBeatType(node: Node): BeatType;
    export interface TimeRelation extends String {
    }
    export function xmlToTimeRelation(node: Node): TimeRelation;
    export interface SenzaMisura extends String {
    }
    export function xmlToSenzaMisura(node: Node): SenzaMisura;
    export interface Instruments extends String {
    }
    export function xmlToInstruments(node: Node): Instruments;
    export interface Sign extends String {
    }
    export function xmlToSign(node: Node): Sign;
    export interface ClefOctaveChange extends String {
    }
    export function xmlToClefOctaveChange(node: Node): ClefOctaveChange;
    export interface StaffType extends String {
    }
    export function xmlToStaffType(node: Node): StaffType;
    export interface Capo extends String {
    }
    export function xmlToCapo(node: Node): Capo;
    export interface Diatonic extends String {
    }
    export function xmlToDiatonic(node: Node): Diatonic;
    export interface Chromatic extends String {
    }
    export function xmlToChromatic(node: Node): Chromatic;
    export interface OctaveChange extends String {
    }
    export function xmlToOctaveChange(node: Node): OctaveChange;
    export interface SlashType extends String {
    }
    export function xmlToSlashType(node: Node): SlashType;
    export interface DisplayStep extends String {
    }
    export function xmlToDisplayStep(node: Node): DisplayStep;
    export interface DisplayOctave extends String {
    }
    export function xmlToDisplayOctave(node: Node): DisplayOctave;
    export interface BendAlter extends String {
    }
    export function xmlToBendAlter(node: Node): BendAlter;
    export interface HoleType extends String {
    }
    export function xmlToHoleType(node: Node): HoleType;
    export interface HoleShape extends String {
    }
    export function xmlToHoleShape(node: Node): HoleShape;
    export interface ArrowDirection extends String {
    }
    export function xmlToArrowDirection(node: Node): ArrowDirection;
    export interface ArrowStyle extends String {
    }
    export function xmlToArrowStyle(node: Node): ArrowStyle;
    export interface CircularArrow extends String {
    }
    export function xmlToCircularArrow(node: Node): CircularArrow;
    export interface BeatUnit extends String {
    }
    export function xmlToBeatUnit(node: Node): BeatUnit;
    export interface MetronomeRelation extends String {
    }
    export function xmlToMetronomeRelation(node: Node): MetronomeRelation;
    export interface MetronomeType extends String {
    }
    export function xmlToMetronomeType(node: Node): MetronomeType;
    export interface PedalStep extends String {
    }
    export function xmlToPedalStep(node: Node): PedalStep;
    export interface PedalAlter extends String {
    }
    export function xmlToPedalAlter(node: Node): PedalAlter;
    export interface AccordionMiddle extends String {
    }
    export function xmlToAccordionMiddle(node: Node): AccordionMiddle;
    export interface Glass extends String {
    }
    export function xmlToGlass(node: Node): Glass;
    export interface Metal extends String {
    }
    export function xmlToMetal(node: Node): Metal;
    export interface Wood extends String {
    }
    export function xmlToWood(node: Node): Wood;
    export interface Pitched extends String {
    }
    export function xmlToPitched(node: Node): Pitched;
    export interface Membrane extends String {
    }
    export function xmlToMembrane(node: Node): Membrane;
    export interface Effect extends String {
    }
    export function xmlToEffect(node: Node): Effect;
    export interface StickType extends String {
    }
    export function xmlToStickType(node: Node): StickType;
    export interface StickMaterial extends String {
    }
    export function xmlToStickMaterial(node: Node): StickMaterial;
    export interface StickLocation extends String {
    }
    export function xmlToStickLocation(node: Node): StickLocation;
    export interface OtherPercussion extends String {
    }
    export function xmlToOtherPercussion(node: Node): OtherPercussion;
    export interface FrameStrings extends String {
    }
    export function xmlToFrameStrings(node: Node): FrameStrings;
    export interface FrameFrets extends String {
    }
    export function xmlToFrameFrets(node: Node): FrameFrets;
    export interface WorkNumber extends String {
    }
    export function xmlToWorkNumber(node: Node): WorkNumber;
    export interface WorkTitle extends String {
    }
    export function xmlToWorkTitle(node: Node): WorkTitle;
    export interface MovementNumber extends String {
    }
    export function xmlToMovementNumber(node: Node): MovementNumber;
    export interface MovementTitle extends String {
    }
    export function xmlToMovementTitle(node: Node): MovementTitle;
    export interface CreditType extends String {
    }
    export function xmlToCreditType(node: Node): CreditType;
    export interface Group extends String {
    }
    export function xmlToGroup(node: Node): Group;
    export interface InstrumentName extends String {
    }
    export function xmlToInstrumentName(node: Node): InstrumentName;
    export interface InstrumentAbbreviation extends String {
    }
    export function xmlToInstrumentAbbreviation(node: Node): InstrumentAbbreviation;
    export interface InstrumentSound extends String {
    }
    export function xmlToInstrumentSound(node: Node): InstrumentSound;
    export interface Ensemble extends String {
    }
    export function xmlToEnsemble(node: Node): Ensemble;
    export interface VirtualLibrary extends String {
    }
    export function xmlToVirtualLibrary(node: Node): VirtualLibrary;
    export interface VirtualName extends String {
    }
    export function xmlToVirtualName(node: Node): VirtualName;
    export interface CalendarDate {
        month: number;
        day: number;
        year: number;
    }
    export interface CalendarDateComplete {
        month: number;
        day: number;
        year: number;
    }
    export interface Tenths extends String {
    }
    export function xmlToTenths(node: Node): Tenths;
    export interface LayoutTenths extends String {
    }
    export function xmlToLayoutTenths(node: Node): LayoutTenths;
    export enum StartStop {
        Start = 0,
        Stop = 1,
    }
    export function getStartStop(node: Node, fallbackVal?: StartStop): StartStop;
    export enum StartStopContinue {
        Start = 0,
        Stop = 1,
        Continue = 2,
    }
    export function getStartStopContinue(node: Node, fallbackVal?: StartStopContinue): StartStopContinue;
    export enum StartStopSingle {
        Single = 3,
        Start = 0,
        Stop = 1,
    }
    export function getStartStopSingle(node: Node, fallbackVal?: StartStopSingle): StartStopSingle;
    export interface YesNoNumber {
        yesNo: boolean;
        isYesNo: boolean;
        num: number;
    }
    export interface YesNoNumberComplete {
        yesNo: boolean;
        isYesNo: boolean;
        num: number;
    }
    export enum SymbolSize {
        Unspecified = 0,
        Full = 1,
        Cue = 2,
        Large = 3,
    }
    export function getSymbolSize(node: Node, fallbackVal?: SymbolSize): SymbolSize;
    export enum AboveBelow {
        Above = 1,
        Below = 2,
        Unspecified = 0,
    }
    export function getAboveBelow(node: Node, fallbackVal?: AboveBelow): AboveBelow;
    export enum OverUnder {
        Over = 1,
        Under = 2,
        Unspecified = 0,
    }
    export function getOverUnder(node: Node, fallbackVal?: OverUnder): OverUnder;
    export enum UpDown {
        Down = 1,
        Up = 0,
    }
    export function getUpDown(node: Node, fallbackVal?: UpDown): UpDown;
    export enum TopBottom {
        Top = 0,
        Bottom = 1,
    }
    export function getTopBottom(node: Node, fallbackVal?: TopBottom): TopBottom;
    export enum LeftRight {
        Right = 1,
        Left = 0,
    }
    export function getLeftRight(node: Node, fallbackVal?: LeftRight): LeftRight;
    export function verifyNumberOfLines(m: number): void;
    export function xmlToNumberOfLines(node: Node): number;
    export function verifyRotation(m: number): void;
    export function xmlToRotation(node: Node): number;
    export enum EnclosureShape {
        Circle = 3,
        Bracket = 4,
        Triangle = 5,
        Diamond = 6,
        None = 7,
        Square = 1,
        Oval = 2,
        Rectangle = 0,
    }
    export function getEnclosureShape(node: Node, fallbackVal?: EnclosureShape): EnclosureShape;
    export enum NormalItalic {
        Italic = 1,
        Normal = 0,
    }
    export function getNormalItalic(node: Node, fallbackVal?: NormalItalic): NormalItalic;
    export enum NormalBold {
        Bold = 2,
        Normal = 0,
    }
    export function getNormalBold(node: Node, fallbackVal?: NormalBold): NormalBold;
    export function verifyNumberLevel(m: number): void;
    export function xmlToNumberLevel(node: Node): number;
    export function verifyBeamLevel(m: number): void;
    export function xmlToBeamLevel(node: Node): number;
    export interface Position {
        defaultX?: number;
        relativeY?: number;
        defaultY?: number;
        relativeX?: number;
    }
    export interface PositionComplete {
        defaultX: number;
        relativeY: number;
        defaultY: number;
        relativeX: number;
    }
    export function xmlToPosition(node: Node): Position;
    export interface Placement {
        placement?: AboveBelow;
    }
    export interface PlacementComplete {
        placement: AboveBelow;
    }
    export function xmlToPlacement(node: Node): Placement;
    export interface Orientation {
        orientation?: OverUnder;
    }
    export interface OrientationComplete {
        orientation: OverUnder;
    }
    export function xmlToOrientation(node: Node): Orientation;
    export interface DirectiveEntity {
        directiveEntity?: boolean;
    }
    export interface DirectiveEntityComplete {
        directiveEntity: boolean;
    }
    export function xmlToDirectiveEntity(node: Node): DirectiveEntity;
    export interface Bezier {
        bezierX2?: number;
        bezierOffset?: number;
        bezierOffset2?: number;
        bezierX?: number;
        bezierY?: number;
        bezierY2?: number;
    }
    export interface BezierComplete {
        bezierX2: number;
        bezierOffset: number;
        bezierOffset2: number;
        bezierX: number;
        bezierY: number;
        bezierY2: number;
    }
    export function xmlToBezier(node: Node): Bezier;
    export interface Font {
        fontFamily?: string;
        fontWeight?: NormalBold;
        fontStyle?: NormalItalic;
        fontSize?: string;
    }
    export interface FontComplete {
        fontFamily: string;
        fontWeight: NormalBold;
        fontStyle: NormalItalic;
        fontSize: string;
    }
    export function xmlToFont(node: Node): Font;
    export enum LeftCenterRight {
        Right = 1,
        Center = 2,
        Left = 0,
    }
    export function getLeftCenterRight(node: Node, fallbackVal?: LeftCenterRight): LeftCenterRight;
    export enum TopMiddleBottomBaseline {
        Top = 0,
        Middle = 1,
        Baseline = 3,
        Bottom = 2,
    }
    export function getTopMiddleBottomBaseline(node: Node, fallbackVal?: TopMiddleBottomBaseline): TopMiddleBottomBaseline;
    export enum DirectionMode {
        Lro = 2,
        Rlo = 3,
        Ltr = 0,
        Rtl = 1,
    }
    export function getDirectionMode(node: Node, fallbackVal?: DirectionMode): DirectionMode;
    export enum StraightCurved {
        Curved = 1,
        Straight = 0,
    }
    export function getStraightCurved(node: Node, fallbackVal?: StraightCurved): StraightCurved;
    export enum SolidDashedDottedWavy {
        Dashed = 1,
        Wavy = 3,
        Dotted = 2,
        Solid = 0,
    }
    export function getSolidDashedDottedWavy(node: Node, fallbackVal?: SolidDashedDottedWavy): SolidDashedDottedWavy;
    export enum NormalAngledSquare {
        Angled = 1,
        Square = 2,
        Normal = 0,
    }
    export function getNormalAngledSquare(node: Node, fallbackVal?: NormalAngledSquare): NormalAngledSquare;
    export enum UprightInverted {
        Upright = 0,
        Inverted = 1,
    }
    export function getUprightInverted(node: Node, fallbackVal?: UprightInverted): UprightInverted;
    export enum UpperMainBelow {
        Main = 1,
        Below = 2,
        Upper = 0,
    }
    export function getUpperMainBelow(node: Node, fallbackVal?: UpperMainBelow): UpperMainBelow;
    export enum WholeHalfUnison {
        Unison = 2,
        Whole = 0,
        Half = 1,
    }
    export function getWholeHalfUnison(node: Node, fallbackVal?: WholeHalfUnison): WholeHalfUnison;
    export enum WholeHalfNone {
        None = 3,
        Whole = 0,
        Half = 1,
    }
    export function getWholeHalfNone(node: Node, fallbackVal?: WholeHalfNone): WholeHalfNone;
    export interface Color {
        color?: string;
    }
    export interface ColorComplete {
        color: string;
    }
    export function xmlToColor(node: Node): Color;
    export interface TextDecoration {
        underline?: number;
        overline?: number;
        lineThrough?: number;
    }
    export interface TextDecorationComplete {
        underline: number;
        overline: number;
        lineThrough: number;
    }
    export function xmlToTextDecoration(node: Node): TextDecoration;
    export interface Justify {
        justify?: LeftCenterRight;
    }
    export interface JustifyComplete {
        justify: LeftCenterRight;
    }
    export function xmlToJustify(node: Node): Justify;
    export interface Halign {
        halign?: LeftCenterRight;
    }
    export interface HalignComplete {
        halign: LeftCenterRight;
    }
    export function xmlToHalign(node: Node): Halign;
    export interface Valign {
        valign?: TopMiddleBottomBaseline;
    }
    export interface ValignComplete {
        valign: TopMiddleBottomBaseline;
    }
    export function xmlToValign(node: Node): Valign;
    export interface ValignImage {
        valignImage?: TopMiddleBottomBaseline;
    }
    export interface ValignImageComplete {
        valignImage: TopMiddleBottomBaseline;
    }
    export function xmlToValignImage(node: Node): ValignImage;
    export interface LetterSpacing {
        letterSpacing?: string;
    }
    export interface LetterSpacingComplete {
        letterSpacing: string;
    }
    export function xmlToLetterSpacing(node: Node): LetterSpacing;
    export interface LineHeight {
        lineHeight?: string;
    }
    export interface LineHeightComplete {
        lineHeight: string;
    }
    export function xmlToLineHeight(node: Node): LineHeight;
    export interface TextDirection {
        dir?: DirectionMode;
    }
    export interface TextDirectionComplete {
        dir: DirectionMode;
    }
    export function xmlToTextDirection(node: Node): TextDirection;
    export interface TextRotation {
        rotation?: number;
    }
    export interface TextRotationComplete {
        rotation: number;
    }
    export function xmlToTextRotation(node: Node): TextRotation;
    export interface Enclosure {
        enclosure?: EnclosureShape;
    }
    export interface EnclosureComplete {
        enclosure: EnclosureShape;
    }
    export function xmlToEnclosure(node: Node): Enclosure;
    export interface PrintStyle extends Position, Font, Color {
    }
    export interface PrintStyleComplete extends PositionComplete, FontComplete, ColorComplete {
    }
    export function xmlToPrintStyle(node: Node): PrintStyle;
    export interface PrintStyleAlign extends PrintStyle, Halign, Valign {
    }
    export interface PrintStyleAlignComplete extends PrintStyleComplete, HalignComplete, ValignComplete {
    }
    export function xmlToPrintStyleAlign(node: Node): PrintStyleAlign;
    export interface LineShape {
        lineShape?: StraightCurved;
    }
    export interface LineShapeComplete {
        lineShape: StraightCurved;
    }
    export function xmlToLineShape(node: Node): LineShape;
    export interface LineType {
        lineType?: SolidDashedDottedWavy;
    }
    export interface LineTypeComplete {
        lineType: SolidDashedDottedWavy;
    }
    export interface DashedFormatting {
        dashLength?: number;
        spaceLength?: number;
    }
    export interface DashedFormattingComplete {
        dashLength: number;
        spaceLength: number;
    }
    export function xmlToDashedFormatting(node: Node): DashedFormatting;
    export interface PrintObject {
        printObject?: boolean;
    }
    export interface PrintObjectComplete {
        printObject: boolean;
    }
    export function xmlToPrintObject(node: Node): PrintObject;
    export interface PrintSpacing {
        printSpacing?: boolean;
    }
    export interface PrintSpacingComplete {
        printSpacing: boolean;
    }
    export function xmlToPrintSpacing(node: Node): PrintSpacing;
    export interface Printout extends PrintObject, PrintSpacing {
        printDot?: boolean;
        printLyric?: boolean;
    }
    export interface PrintoutComplete extends PrintObjectComplete, PrintSpacingComplete {
        printDot: boolean;
        printLyric: boolean;
    }
    export interface TextFormatting extends Justify, PrintStyleAlign, TextDecoration, TextRotation, LetterSpacing, LineHeight, TextDirection, Enclosure {
    }
    export interface TextFormattingComplete extends JustifyComplete, PrintStyleAlignComplete, TextDecorationComplete, TextRotationComplete, LetterSpacingComplete, LineHeightComplete, TextDirectionComplete, EnclosureComplete {
    }
    export function xmlToTextFormatting(node: Node): TextFormatting;
    export interface LevelDisplay {
        bracket?: boolean;
        size?: SymbolSize;
        parentheses?: boolean;
    }
    export interface LevelDisplayComplete {
        bracket: boolean;
        size: SymbolSize;
        parentheses: boolean;
    }
    export function xmlToLevelDisplay(node: Node): LevelDisplay;
    export interface TrillSound {
        startNote?: UpperMainBelow;
        accelerate?: boolean;
        beats?: number;
        lastBeat?: number;
        trillStep?: WholeHalfUnison;
        twoNoteTurn?: WholeHalfNone;
        secondBeat?: number;
    }
    export interface TrillSoundComplete {
        startNote: UpperMainBelow;
        accelerate: boolean;
        beats: number;
        lastBeat: number;
        trillStep: WholeHalfUnison;
        twoNoteTurn: WholeHalfNone;
        secondBeat: number;
    }
    export function xmlToTrillSound(node: Node): TrillSound;
    export interface BendSound {
        accelerate?: boolean;
        beats?: number;
        lastBeat?: number;
        secondBeat?: number;
    }
    export interface BendSoundComplete {
        accelerate: boolean;
        beats: number;
        lastBeat: number;
        secondBeat: number;
    }
    export function xmlToBendSound(node: Node): BendSound;
    export interface TimeOnly {
        timeOnly: string;
    }
    export interface TimeOnlyComplete {
        timeOnly: string;
    }
    export function xmlToTimeOnly(node: Node): TimeOnly;
    export interface DocumentAttributes {
        version_: string;
    }
    export interface DocumentAttributesComplete {
        version_: string;
    }
    export function xmlToDocumentAttributes(node: Node): DocumentAttributes;
    export interface Editorial {
        footnote?: Footnote;
        level?: Level;
    }
    export interface EditorialComplete {
        footnote: Footnote;
        level: Level;
    }
    export function xmlToEditorial(node: Node): Editorial;
    export interface EditorialVoice {
        voice?: string;
        footnote?: Footnote;
        level?: Level;
    }
    export interface EditorialVoiceComplete {
        voice: string;
        footnote: Footnote;
        level: Level;
    }
    export function xmlToEditorialVoice(node: Node): EditorialVoice;
    export interface Footnote extends TextFormatting {
        text: string;
    }
    export interface FootnoteComplete extends TextFormattingComplete {
        text: string;
    }
    export function xmlToFootnote(node: Node): Footnote;
    export interface Level extends LevelDisplay {
        text: string;
        reference?: boolean;
    }
    export interface LevelComplete extends LevelDisplayComplete {
        text: string;
        reference: boolean;
    }
    export function xmlToLevel(node: Node): Level;
    export interface Fermata extends PrintStyle {
        shape: NormalAngledSquare;
        type?: UprightInverted;
    }
    export interface FermataComplete extends PrintStyleComplete {
        shape: NormalAngledSquare;
        type: UprightInverted;
    }
    export function xmlToFermata(node: Node): Fermata;
    export interface WavyLine extends Position, Placement, Color, TrillSound {
        number_?: number;
        type: StartStopContinue;
    }
    export interface WavyLineComplete extends PositionComplete, PlacementComplete, ColorComplete, TrillSoundComplete {
        number_: number;
        type: StartStopContinue;
    }
    export function xmlToWavyLine(node: Node): WavyLine;
    export interface Staff {
        idx: number;
    }
    export interface StaffComplete {
        idx: number;
    }
    export function xmlToStaff(node: Node): Staff;
    export interface Segno extends PrintStyleAlign {
    }
    export interface SegnoComplete extends PrintStyleAlignComplete {
    }
    export function xmlToSegno(node: Node): Segno;
    export interface Coda extends PrintStyleAlign {
    }
    export interface CodaComplete extends PrintStyleAlignComplete {
    }
    export function xmlToCoda(node: Node): Coda;
    export interface ActualNotes {
        count: number;
    }
    export interface ActualNotesComplete {
        count: number;
    }
    export function xmlToActualNotes(node: Node): ActualNotes;
    export interface NormalNotes {
        count: number;
    }
    export interface NormalNotesComplete {
        count: number;
    }
    export function xmlToNormalNotes(node: Node): NormalNotes;
    export interface NormalDot {
    }
    export interface NormalDotComplete {
    }
    export function xmlToNormalDot(node: Node): NormalDot;
    export interface Dynamics extends PrintStyleAlign, Placement, TextDecoration, Enclosure {
        fp: boolean;
        pp: boolean;
        ppp: boolean;
        fff: boolean;
        sf: boolean;
        rf: boolean;
        mp: boolean;
        sfpp: boolean;
        f: boolean;
        ffffff: boolean;
        sfz: boolean;
        ff: boolean;
        pppppp: boolean;
        rfz: boolean;
        otherDynamics?: string;
        fz: boolean;
        ppppp: boolean;
        mf: boolean;
        pppp: boolean;
        fffff: boolean;
        sffz: boolean;
        sfp: boolean;
        p: boolean;
        ffff: boolean;
    }
    export interface DynamicsComplete extends PrintStyleAlignComplete, PlacementComplete, TextDecorationComplete, EnclosureComplete {
        fp: boolean;
        pp: boolean;
        ppp: boolean;
        fff: boolean;
        sf: boolean;
        rf: boolean;
        mp: boolean;
        sfpp: boolean;
        f: boolean;
        ffffff: boolean;
        sfz: boolean;
        ff: boolean;
        pppppp: boolean;
        rfz: boolean;
        otherDynamics: string;
        fz: boolean;
        ppppp: boolean;
        mf: boolean;
        pppp: boolean;
        fffff: boolean;
        sffz: boolean;
        sfp: boolean;
        p: boolean;
        ffff: boolean;
    }
    export function xmlToDynamics(node: Node): Dynamics;
    export interface Fingering extends PrintStyle, Placement {
        substitution?: boolean;
        finger: number;
        alternate?: boolean;
    }
    export interface FingeringComplete extends PrintStyleComplete, PlacementComplete {
        substitution: boolean;
        finger: number;
        alternate: boolean;
    }
    export function xmlToFingering(node: Node): Fingering;
    export interface Fret extends Font, Color {
        fret: number;
    }
    export interface FretComplete extends FontComplete, ColorComplete {
        fret: number;
    }
    export function xmlToFret(node: Node): Fret;
    export interface String extends PrintStyle, Placement {
        stringNum: number;
    }
    export interface StringComplete extends PrintStyleComplete, PlacementComplete {
        stringNum: number;
    }
    export function xmlToString(node: Node): String;
    export interface TuningAlter {
        step: string;
    }
    export interface TuningAlterComplete {
        step: string;
    }
    export function xmlToTuningAlter(node: Node): TuningAlter;
    export interface TuningOctave {
        step: string;
    }
    export interface TuningOctaveComplete {
        step: string;
    }
    export function xmlToTuningOctave(node: Node): TuningOctave;
    export interface DisplayText extends TextFormatting {
        text: string;
    }
    export interface DisplayTextComplete extends TextFormattingComplete {
        text: string;
    }
    export function xmlToDisplayText(node: Node): DisplayText;
    export interface AccidentalText extends TextFormatting {
        text: string;
    }
    export interface AccidentalTextComplete extends TextFormattingComplete {
        text: string;
    }
    export function xmlToAccidentalText(node: Node): AccidentalText;
    export interface PartNameDisplay extends PrintObject {
        name: TextArray;
    }
    export interface PartNameDisplayComplete extends PrintObjectComplete {
        name: TextArray;
    }
    export interface PartAbbreviationDisplay extends PrintObject {
        name: TextArray;
    }
    export interface PartAbbreviationDisplayComplete extends PrintObjectComplete {
        name: TextArray;
    }
    export interface MidiDevice {
        port?: number;
        deviceName: string;
        id?: number;
    }
    export interface MidiDeviceComplete {
        port: number;
        deviceName: string;
        id: number;
    }
    export function xmlToMidiDevice(node: Node): MidiDevice;
    export function verifyMidiChannel(m: number): void;
    export function xmlToMidiChannel(node: Node): number;
    export function verifyMidiBank(m: number): void;
    export function xmlToMidiBank(node: Node): number;
    export function verifyMidiProgram(m: number): void;
    export function xmlToMidiProgram(node: Node): number;
    export function verifyMidiUnpitched(m: number): void;
    export function xmlToMidiUnpitched(node: Node): number;
    export function verifyVolume(m: number): void;
    export function xmlToVolume(node: Node): number;
    export function verifyPan(m: number): void;
    export function xmlToPan(node: Node): number;
    export function verifyElevation(m: number): void;
    export function xmlToElevation(node: Node): number;
    export interface MidiInstrument {
        midiUnpitched?: number;
        volume?: number;
        pan?: number;
        elevation?: number;
        midiBank?: number;
        midiProgram?: number;
        id: string;
        midiChannel?: number;
        midiName?: string;
    }
    export interface MidiInstrumentComplete {
        midiUnpitched: number;
        volume: number;
        pan: number;
        elevation: number;
        midiBank: number;
        midiProgram: number;
        id: string;
        midiChannel: number;
        midiName: string;
    }
    export function xmlToMidiInstrument(node: Node): MidiInstrument;
    export interface Play {
        ipa?: string;
        mute?: string;
        otherPlay?: string;
        semiPitched?: string;
    }
    export interface PlayComplete {
        ipa: string;
        mute: string;
        otherPlay: string;
        semiPitched: string;
    }
    export function xmlToPlay(node: Node): Play;
    export interface Millimeters extends String {
    }
    export function xmlToMillimeters(node: Node): Millimeters;
    export interface Scaling {
        tenths?: number;
        millimeters?: number;
    }
    export interface ScalingComplete {
        tenths: number;
        millimeters: number;
    }
    export function xmlToScaling(node: Node): Scaling;
    export interface LeftMargin extends String {
    }
    export function xmlToLeftMargin(node: Node): LeftMargin;
    export interface RightMargin extends String {
    }
    export function xmlToRightMargin(node: Node): RightMargin;
    export interface TopMargin extends String {
    }
    export function xmlToTopMargin(node: Node): TopMargin;
    export interface BottomMargin extends String {
    }
    export function xmlToBottomMargin(node: Node): BottomMargin;
    export interface PageHeight extends String {
    }
    export function xmlToPageHeight(node: Node): PageHeight;
    export interface PageWidth extends String {
    }
    export function xmlToPageWidth(node: Node): PageWidth;
    export enum OddEvenBoth {
        Both = 2,
        Even = 1,
        Odd = 0,
    }
    export function getOddEvenBoth(node: Node, fallbackVal?: OddEvenBoth): OddEvenBoth;
    export interface PageMargins {
        topMargin: number;
        leftMargin: number;
        bottomMargin: number;
        type?: OddEvenBoth;
        rightMargin: number;
    }
    export interface PageMarginsComplete {
        topMargin: number;
        leftMargin: number;
        bottomMargin: number;
        type: OddEvenBoth;
        rightMargin: number;
    }
    export function xmlToPageMargins(node: Node): PageMargins;
    export interface PageLayout {
        pageHeight?: number;
        pageWidth?: number;
        pageMargins?: PageMargins[];
    }
    export interface PageLayoutComplete {
        pageHeight: number;
        pageWidth: number;
        pageMargins: PageMargins[];
    }
    export function xmlToPageLayout(node: Node): PageLayout;
    export interface SystemDistance extends String {
    }
    export function xmlToSystemDistance(node: Node): SystemDistance;
    export interface TopSystemDistance extends String {
    }
    export function xmlToTopSystemDistance(node: Node): TopSystemDistance;
    export interface SystemLayout {
        systemDividers?: SystemDividers;
        systemMargins?: SystemMargins;
        systemDistance?: number;
        topSystemDistance?: number;
    }
    export interface SystemLayoutComplete {
        systemDividers: SystemDividers;
        systemMargins: SystemMargins;
        systemDistance: number;
        topSystemDistance: number;
    }
    export function xmlToSystemLayout(node: Node): SystemLayout;
    export interface SystemMargins {
        leftMargin: number;
        rightMargin: number;
    }
    export interface SystemMarginsComplete {
        leftMargin: number;
        rightMargin: number;
    }
    export function xmlToSystemMargins(node: Node): SystemMargins;
    export interface SystemDividers {
        rightDivider: RightDivider;
        leftDivider: LeftDivider;
    }
    export interface SystemDividersComplete {
        rightDivider: RightDivider;
        leftDivider: LeftDivider;
    }
    export function xmlToSystemDividers(node: Node): SystemDividers;
    export interface LeftDivider extends PrintObject, PrintStyleAlign {
    }
    export interface LeftDividerComplete extends PrintObjectComplete, PrintStyleAlignComplete {
    }
    export function xmlToLeftDivider(node: Node): LeftDivider;
    export interface RightDivider extends PrintObject, PrintStyleAlign {
    }
    export interface RightDividerComplete extends PrintObjectComplete, PrintStyleAlignComplete {
    }
    export function xmlToRightDivider(node: Node): RightDivider;
    export interface StaffDistance extends String {
    }
    export function xmlToStaffDistance(node: Node): StaffDistance;
    export interface StaffLayout {
        staffDistance?: number;
        num: number;
    }
    export interface StaffLayoutComplete {
        staffDistance: number;
        num: number;
    }
    export function xmlToStaffLayout(node: Node): StaffLayout;
    export interface MeasureDistance extends String {
    }
    export function xmlToMeasureDistance(node: Node): MeasureDistance;
    export interface MeasureLayout {
        measureDistance?: number;
    }
    export interface MeasureLayoutComplete {
        measureDistance: number;
    }
    export function xmlToMeasureLayout(node: Node): MeasureLayout;
    export interface LineWidth {
        tenths: number;
        type: string;
    }
    export interface LineWidthComplete {
        tenths: number;
        type: string;
    }
    export function xmlToLineWidth(node: Node): LineWidth;
    export enum CueGraceLarge {
        Grace = 1,
        Cue = 0,
        Large = 2,
    }
    export function getCueGraceLarge(node: Node, fallbackVal?: CueGraceLarge): CueGraceLarge;
    export interface NoteSize {
        size: number;
        type: CueGraceLarge;
    }
    export interface NoteSizeComplete {
        size: number;
        type: CueGraceLarge;
    }
    export function xmlToNoteSize(node: Node): NoteSize;
    export interface Distance {
        tenths: number;
        type: string;
    }
    export interface DistanceComplete {
        tenths: number;
        type: string;
    }
    export function xmlToDistance(node: Node): Distance;
    export interface Appearance {
        lineWidths?: {
            [x: string]: LineWidth;
        };
        distances?: {
            [x: string]: Distance;
        };
        otherAppearances?: string[];
        noteSizes?: {
            [x: string]: NoteSize;
        };
    }
    export interface AppearanceComplete {
        lineWidths: {
            [x: string]: LineWidth;
        };
        distances: {
            [x: string]: Distance;
        };
        otherAppearances: string[];
        noteSizes: {
            [x: string]: NoteSize;
        };
    }
    export function xmlToAppearance(node: Node): Appearance;
    export interface Creator {
        creator: string;
        type: string;
    }
    export interface CreatorComplete {
        creator: string;
        type: string;
    }
    export function xmlToCreator(node: Node): Creator;
    export interface Rights {
        type: string;
        rights: string;
    }
    export interface RightsComplete {
        type: string;
        rights: string;
    }
    export function xmlToRights(node: Node): Rights;
    export interface Encoder {
        encoder: string;
        type: string;
    }
    export interface EncoderComplete {
        encoder: string;
        type: string;
    }
    export function xmlToEncoder(node: Node): Encoder;
    export interface Source {
        source: string;
    }
    export interface SourceComplete {
        source: string;
    }
    export function xmlToSource(node: Node): Source;
    export interface Relation {
        type: string;
        data: string;
    }
    export interface RelationComplete {
        type: string;
        data: string;
    }
    export function xmlToRelation(node: Node): Relation;
    export interface MiscellaneousField {
        data: string;
        name: string;
    }
    export interface MiscellaneousFieldComplete {
        data: string;
        name: string;
    }
    export function xmlToMiscellaneousField(node: Node): MiscellaneousField;
    export interface Miscellaneous {
        miscellaneousFields?: MiscellaneousField[];
    }
    export interface MiscellaneousComplete {
        miscellaneousFields: MiscellaneousField[];
    }
    export function xmlToMiscellaneous(node: Node): Miscellaneous;
    export interface Identification {
        miscellaneous: Miscellaneous;
        creators?: Creator[];
        relations?: Relation[];
        rights?: Rights[];
        encoding: Encoding;
        source: Source;
    }
    export interface IdentificationComplete {
        miscellaneous: Miscellaneous;
        creators: Creator[];
        relations: Relation[];
        rights: Rights[];
        encoding: Encoding;
        source: Source;
    }
    export function xmlToIdentification(node: Node): Identification;
    export interface Supports {
        element: string;
        attribute?: string;
        value: string;
        type: string;
    }
    export interface SupportsComplete {
        element: string;
        attribute: string;
        value: string;
        type: string;
    }
    export function xmlToSupports(node: Node): Supports;
    export interface Encoding {
        encodingDescriptions?: string[];
        encodingDate?: EncodingDate;
        supports?: {
            [x: string]: Supports;
        };
        encoders?: Encoder[];
        softwares?: string[];
    }
    export interface EncodingComplete {
        encodingDescriptions: string[];
        encodingDate: EncodingDate;
        supports: {
            [x: string]: Supports;
        };
        encoders: Encoder[];
        softwares: string[];
    }
    export function xmlToEncoding(node: Node): Encoding;
    export enum SeparatorType {
        None = 0,
        Horizontal = 1,
        Diagonal = 2,
        Vertical = 3,
        Adjacent = 4,
    }
    export function getSeparatorType(node: Node, fallbackVal?: SeparatorType): SeparatorType;
    export interface TimeSeparator {
        separator?: SeparatorType;
    }
    export interface TimeSeparatorComplete {
        separator: SeparatorType;
    }
    export function xmlToTimeSeparator(node: Node): TimeSeparator;
    export enum TimeSymbolType {
        DottedNote = 4,
        Cut = 1,
        SingleNumber = 2,
        Note = 3,
        Common = 0,
        Normal = 5,
    }
    export function getTimeSymbolType(node: Node, fallbackVal?: TimeSymbolType): TimeSymbolType;
    export interface TimeSymbol {
        symbol?: TimeSymbolType;
    }
    export interface TimeSymbolComplete {
        symbol: TimeSymbolType;
    }
    export function xmlToTimeSymbol(node: Node): TimeSymbol;
    export enum CancelLocation {
        Right = 1,
        BeforeBarline = 2,
        Left = 0,
    }
    export function getCancelLocation(node: Node, fallbackVal?: CancelLocation): CancelLocation;
    export interface Cancel {
        fifths: number;
        location?: CancelLocation;
    }
    export interface CancelComplete {
        fifths: number;
        location: CancelLocation;
    }
    export function xmlToCancel(node: Node): Cancel;
    export interface Fifths extends String {
    }
    export function xmlToFifths(node: Node): Fifths;
    export interface KeyOctave {
        octave: number;
        number_: number;
        cancel?: boolean;
    }
    export interface KeyOctaveComplete {
        octave: number;
        number_: number;
        cancel: boolean;
    }
    export function xmlToKeyOctave(node: Node): KeyOctave;
    export interface Divisions extends String {
    }
    export function xmlToDivisions(node: Node): Divisions;
    export interface Key extends PrintStyle, PrintObject {
        cancel?: Cancel;
        keySteps: string[];
        keyOctaves?: KeyOctave[];
        number_?: number;
        fifths: number;
        keyAlters: string[];
        keyAccidentals: string[];
        mode?: string;
    }
    export interface KeyComplete extends PrintStyleComplete, PrintObjectComplete {
        cancel: Cancel;
        keySteps: string[];
        keyOctaves: KeyOctave[];
        number_: number;
        fifths: number;
        keyAlters: string[];
        keyAccidentals: string[];
        mode: string;
    }
    export function xmlToKey(node: Node): Key;
    export interface Time extends TimeSymbol, TimeSeparator, PrintStyleAlign, PrintObject {
        interchangeables?: Interchangeable[];
        beats: number[];
        beatTypes: number[];
        senzaMisura: boolean;
    }
    export interface TimeComplete extends TimeSymbolComplete, TimeSeparatorComplete, PrintStyleAlignComplete, PrintObjectComplete {
        interchangeables: Interchangeable[];
        beats: number[];
        beatTypes: number[];
        senzaMisura: boolean;
    }
    export function xmlToTime(node: Node): Time;
    export interface Interchangeable extends TimeSymbol, TimeSeparator {
        beats: number[];
        beatTypes: number[];
        timeRelation?: string;
    }
    export interface InterchangeableComplete extends TimeSymbolComplete, TimeSeparatorComplete {
        beats: number[];
        beatTypes: number[];
        timeRelation: string;
    }
    export function xmlToInterchangeable(node: Node): Interchangeable;
    export interface Staves extends String {
    }
    export function xmlToStaves(node: Node): Staves;
    export enum PartSymbolType {
        None = 0,
        Line = 2,
        Bracket = 3,
        Square = 4,
        Brace = 1,
    }
    export function getPartSymbolType(node: Node, fallbackVal?: PartSymbolType): PartSymbolType;
    export interface PartSymbol extends Position, Color {
        topStaff?: number;
        type: PartSymbolType;
        bottomStaff?: number;
    }
    export interface PartSymbolComplete extends PositionComplete, ColorComplete {
        topStaff: number;
        type: PartSymbolType;
        bottomStaff: number;
    }
    export function xmlToPartSymbol(node: Node): PartSymbol;
    export interface Line extends String {
    }
    export function xmlToLine(node: Node): Line;
    export interface Clef extends PrintStyle, PrintObject {
        clefOctaveChange: string;
        sign: string;
        number_?: number;
        size?: SymbolSize;
        line: number;
        afterBarline?: boolean;
        additional?: boolean;
    }
    export interface ClefComplete extends PrintStyleComplete, PrintObjectComplete {
        clefOctaveChange: string;
        sign: string;
        number_: number;
        size: SymbolSize;
        line: number;
        afterBarline: boolean;
        additional: boolean;
    }
    export function xmlToClef(node: Node): Clef;
    export interface StaffLines extends String {
    }
    export function xmlToStaffLines(node: Node): StaffLines;
    export interface StaffTuning {
        tuningAlter?: TuningAlter;
        line: string;
        tuningStep: string;
        tuningOctave: TuningOctave;
    }
    export interface StaffTuningComplete {
        tuningAlter: TuningAlter;
        line: string;
        tuningStep: string;
        tuningOctave: TuningOctave;
    }
    export function xmlToStaffTuning(node: Node): StaffTuning;
    export interface StaffSize extends String {
    }
    export function xmlToStaffSize(node: Node): StaffSize;
    export enum ShowFretsType {
        Letters = 1,
        Numbers = 0,
    }
    export function getShowFretsType(node: Node, fallbackVal?: ShowFretsType): ShowFretsType;
    export interface StaffDetails extends PrintObject, PrintSpacing {
        staffLines?: number;
        staffTunings?: StaffTuning[];
        staffSize?: number;
        capo?: string;
        number_?: number;
        showFets?: ShowFretsType;
        staffType?: string;
    }
    export interface StaffDetailsComplete extends PrintObjectComplete, PrintSpacingComplete {
        staffLines: number;
        staffTunings: StaffTuning[];
        staffSize: number;
        capo: string;
        number_: number;
        showFets: ShowFretsType;
        staffType: string;
    }
    export function xmlToStaffDetails(node: Node): StaffDetails;
    export interface Double {
    }
    export interface DoubleComplete {
    }
    export function xmlToDouble(node: Node): Double;
    export interface Transpose {
        number_?: number;
        diatonic?: string;
        octaveChange?: string;
        double_?: Double;
        chromatic: string;
    }
    export interface TransposeComplete {
        number_: number;
        diatonic: string;
        octaveChange: string;
        double_: Double;
        chromatic: string;
    }
    export function xmlToTranspose(node: Node): Transpose;
    export interface Directive extends PrintStyle {
        data: string;
    }
    export interface DirectiveComplete extends PrintStyleComplete {
        data: string;
    }
    export function xmlToDirective(node: Node): Directive;
    export interface SlashDot {
    }
    export interface SlashDotComplete {
    }
    export function xmlToSlashDot(node: Node): SlashDot;
    export interface MultipleRest {
        multipleRest?: boolean;
        data: string;
    }
    export interface MultipleRestComplete {
        multipleRest: boolean;
        data: string;
    }
    export function xmlToMultipleRest(node: Node): MultipleRest;
    export interface MeasureRepeat {
        slashed?: number;
        data?: string;
        type: StartStop;
    }
    export interface MeasureRepeatComplete {
        slashed: number;
        data: string;
        type: StartStop;
    }
    export function xmlToMeasureRepeat(node: Node): MeasureRepeat;
    export interface BeatRepeat {
        slashType?: string;
        useDots?: boolean;
        slashDots?: SlashDot[];
        slases?: number;
        type: StartStop;
    }
    export interface BeatRepeatComplete {
        slashType: string;
        useDots: boolean;
        slashDots: SlashDot[];
        slases: number;
        type: StartStop;
    }
    export function xmlToBeatRepeat(node: Node): BeatRepeat;
    export interface Slash {
        slashType?: string;
        useDots?: boolean;
        useStems?: boolean;
        slashDots?: SlashDot[];
        type: StartStop;
    }
    export interface SlashComplete {
        slashType: string;
        useDots: boolean;
        useStems: boolean;
        slashDots: SlashDot[];
        type: StartStop;
    }
    export function xmlToSlash(node: Node): Slash;
    export interface MeasureStyle extends Font, Color {
        measureRepeat?: MeasureRepeat;
        beatRepeat?: BeatRepeat;
        multipleRest?: MultipleRest;
        slash?: Slash;
        number_?: number;
    }
    export interface MeasureStyleComplete extends FontComplete, ColorComplete {
        measureRepeat: MeasureRepeat;
        beatRepeat: BeatRepeat;
        multipleRest: MultipleRest;
        slash: Slash;
        number_: number;
    }
    export function xmlToMeasureStyle(node: Node): MeasureStyle;
    export interface Attributes extends Editorial {
        divisions?: number;
        partSymbol?: PartSymbol;
        clef?: Clef;
        measureStyle?: MeasureStyle;
        time?: Time;
        staffDetails?: StaffDetails;
        transpose?: Transpose;
        staves?: number;
        instruments?: string;
        keySignature?: Key;
        directive?: Directive;
    }
    export interface AttributesComplete extends EditorialComplete {
        divisions: number;
        partSymbol: PartSymbol;
        clef: Clef;
        measureStyle: MeasureStyle;
        time: Time;
        staffDetails: StaffDetails;
        transpose: Transpose;
        staves: number;
        instruments: string;
        keySignature: Key;
        directive: Directive;
    }
    export function xmlToAttributes(node: Node): Attributes;
    export interface Cue {
    }
    export interface CueComplete {
    }
    export function xmlToCue(node: Node): Cue;
    export interface Grace {
        makeTime?: string;
        stealTimePrevious?: string;
        slash?: boolean;
        stealTimeFollowing?: string;
    }
    export interface GraceComplete {
        makeTime: string;
        stealTimePrevious: string;
        slash: boolean;
        stealTimeFollowing: string;
    }
    export function xmlToGrace(node: Node): Grace;
    export interface Chord {
    }
    export interface ChordComplete {
    }
    export function xmlToChord(node: Node): Chord;
    export interface Unpitched {
        displayStep?: string;
        displayOctave?: string;
    }
    export interface UnpitchedComplete {
        displayStep: string;
        displayOctave: string;
    }
    export function xmlToUnpitched(node: Node): Unpitched;
    export interface Alter extends String {
    }
    export function xmlToAlter(node: Node): Alter;
    export interface Octave extends String {
    }
    export function xmlToOctave(node: Node): Octave;
    export interface Pitch {
        alter?: number;
        step?: string;
        octave: number;
    }
    export interface PitchComplete {
        alter: number;
        step: string;
        octave: number;
    }
    export function xmlToPitch(node: Node): Pitch;
    export interface FullNote {
        unpitched?: Unpitched;
        chord?: Chord;
        pitch?: Pitch;
        rest?: Rest;
    }
    export interface FullNoteComplete {
        unpitched: Unpitched;
        chord: Chord;
        pitch: Pitch;
        rest: Rest;
    }
    export function xmlToFullNote(node: Node): FullNote;
    export interface Rest {
        measure?: boolean;
        displayStep?: string;
        displayOctave?: string;
    }
    export interface RestComplete {
        measure: boolean;
        displayStep: string;
        displayOctave: string;
    }
    export function xmlToRest(node: Node): Rest;
    export interface Duration extends String {
    }
    export function xmlToDuration(node: Node): Duration;
    export interface Tie extends TimeOnly {
        type?: StartStop;
    }
    export interface TieComplete extends TimeOnlyComplete {
        type: StartStop;
    }
    export function xmlToTie(node: Node): Tie;
    export interface Instrument {
        id: string;
    }
    export interface InstrumentComplete {
        id: string;
    }
    export function xmlToInstrument(node: Node): Instrument;
    export interface Note extends EditorialVoice, PrintStyle, Printout, TimeOnly, FullNote {
        noteheadText?: NoteheadText;
        timeModification?: TimeModification;
        accidental?: Accidental;
        instrument?: Instrument;
        attack?: number;
        endDynamics?: number;
        lyrics?: Lyric[];
        dots?: Dot[];
        notations?: Notations[];
        stem?: Stem;
        noteType?: Type;
        pizzicato: boolean;
        cue?: Cue;
        duration?: number;
        ties?: Tie[];
        dynamics?: number;
        play?: Play;
        staff?: Staff;
        grace?: Grace;
        notehead?: Notehead;
        release?: number;
        beams?: Beam[];
    }
    export interface NoteComplete extends EditorialVoiceComplete, PrintStyleComplete, PrintoutComplete, TimeOnlyComplete, FullNoteComplete {
        noteheadText: NoteheadText;
        timeModification: TimeModification;
        accidental: Accidental;
        instrument: Instrument;
        attack: number;
        endDynamics: number;
        lyrics: Lyric[];
        dots: Dot[];
        notations: Notations[];
        stem: Stem;
        noteType: Type;
        pizzicato: boolean;
        cue: Cue;
        duration: number;
        ties: Tie[];
        dynamics: number;
        play: Play;
        staff: Staff;
        grace: Grace;
        notehead: Notehead;
        release: number;
        beams: Beam[];
    }
    export function xmlToNote(node: Node): Note;
    export enum Count {
        Quarter = 4,
        Breve = 9990,
        Long = 9991,
        _1024th = 1024,
        _32nd = 32,
        _16th = 16,
        Eighth = 8,
        Maxima = 9992,
        _512th = 512,
        _64th = 64,
        _256th = 256,
        _128th = 128,
        Half = 2,
        Whole = 1,
    }
    export function getCount(node: Node, fallbackVal?: Count): Count;
    export interface Type {
        duration: Count;
        size?: SymbolSize;
    }
    export interface TypeComplete {
        duration: Count;
        size: SymbolSize;
    }
    export function xmlToType(node: Node): Type;
    export interface Dot extends PrintStyle, Placement {
    }
    export interface DotComplete extends PrintStyleComplete, PlacementComplete {
    }
    export function xmlToDot(node: Node): Dot;
    export enum MxmlAccidental {
        NaturalFlat = 7,
        SharpUp = 13,
        ThreeQuartersFlat = 10,
        ThreeQuartersSharp = 11,
        QuarterFlat = 8,
        Flat = 2,
        TripleSharp = 18,
        Flat1 = 27,
        Flat2 = 28,
        Flat3 = 29,
        Flat4 = 291,
        TripleFlat = 19,
        Flat5 = 30,
        Sharp = 0,
        QuarterSharp = 9,
        SlashFlat = 21,
        FlatDown = 16,
        NaturalDown = 14,
        SlashQuarterSharp = 19,
        SharpSharp = 4,
        Sharp1 = 23,
        FlatUp = 17,
        Sharp2 = 24,
        Sharp3 = 25,
        DoubleSharp = 3,
        Sharp4 = 251,
        Sharp5 = 26,
        Sori = 31,
        DoubleSlashFlat = 22,
        SharpDown = 12,
        Koron = 32,
        NaturalUp = 15,
        SlashSharp = 20,
        NaturalSharp = 6,
        FlatFlat = 5,
        Natural = 1,
        DoubleFlat = 33,
    }
    export function getMxmlAccidental(node: Node, fallbackVal?: MxmlAccidental): MxmlAccidental;
    export interface Accidental extends LevelDisplay, PrintStyle {
        cautionary?: boolean;
        accidental: MxmlAccidental;
        editorial?: boolean;
    }
    export interface AccidentalComplete extends LevelDisplayComplete, PrintStyleComplete {
        cautionary: boolean;
        accidental: MxmlAccidental;
        editorial: boolean;
    }
    export function xmlToAccidental(node: Node): Accidental;
    export interface TimeModification {
        actualNotes: ActualNotes;
        normalType?: string;
        normalNotes: NormalNotes;
        normalDots?: NormalDot[];
    }
    export interface TimeModificationComplete {
        actualNotes: ActualNotes;
        normalType: string;
        normalNotes: NormalNotes;
        normalDots: NormalDot[];
    }
    export function xmlToTimeModification(node: Node): TimeModification;
    export enum StemType {
        None = 2,
        Double = 3,
        Down = 0,
        Up = 1,
    }
    export function getStemType(node: Node, fallbackVal?: StemType): StemType;
    export interface Stem extends Position, Color {
        type: StemType;
    }
    export interface StemComplete extends PositionComplete, ColorComplete {
        type: StemType;
    }
    export function xmlToStem(node: Node): Stem;
    export enum NoteheadType {
        InvertedTriangle = 7,
        CircleDot = 14,
        ArrowUp = 9,
        Do = 18,
        Mi = 20,
        Cross = 4,
        Slash = 0,
        Fa = 21,
        Triangle = 1,
        FaUp = 22,
        So = 23,
        LeftTriangle = 15,
        BackSlashed = 11,
        None = 17,
        La = 24,
        Slashed = 10,
        Normal = 12,
        Cluster = 13,
        Ti = 25,
        Re = 19,
        Nrectangle = 16,
        Square = 3,
        ArrowDown = 8,
        X = 5,
        Diamond = 2,
        CircleX = 6,
    }
    export function getNoteheadType(node: Node, fallbackVal?: NoteheadType): NoteheadType;
    export interface Notehead extends Font, Color {
        type: NoteheadType;
        filled?: boolean;
        parentheses?: boolean;
    }
    export interface NoteheadComplete extends FontComplete, ColorComplete {
        type: NoteheadType;
        filled: boolean;
        parentheses: boolean;
    }
    export function xmlToNotehead(node: Node): Notehead;
    export interface NoteheadText {
        text: TextArray;
    }
    export interface NoteheadTextComplete {
        text: TextArray;
    }
    export enum BeamType {
        BackwardHook = 4,
        Begin = 0,
        ForwardHook = 3,
        Continue = 1,
        End = 2,
    }
    export function getBeamType(node: Node, fallbackVal?: BeamType): BeamType;
    export enum AccelRitNone {
        Accel = 0,
        None = 2,
        Rit = 1,
    }
    export function getAccelRitNone(node: Node, fallbackVal?: AccelRitNone): AccelRitNone;
    export interface Beam {
        repeater?: boolean;
        number_: number;
        type: BeamType;
        fan?: AccelRitNone;
    }
    export interface BeamComplete {
        repeater: boolean;
        number_: number;
        type: BeamType;
        fan: AccelRitNone;
    }
    export function xmlToBeam(node: Node): Beam;
    export interface Notations extends Editorial, PrintObject {
        slurs?: Slur[];
        articulations?: Articulations[];
        slides?: Slide[];
        technicals?: Technical[];
        tieds?: Tied[];
        tuplets?: Tuplet[];
        glissandos?: Glissando[];
        dynamics?: Dynamics[];
        fermatas?: Fermata[];
        accidentalMarks?: AccidentalMark[];
        ornaments?: Ornaments[];
        arpeggiates?: Arpeggiate[];
        nonArpeggiates?: NonArpeggiate[];
        otherNotations?: OtherNotation[];
    }
    export interface NotationsComplete extends EditorialComplete, PrintObjectComplete {
        slurs: Slur[];
        articulations: Articulations[];
        slides: Slide[];
        technicals: Technical[];
        tieds: Tied[];
        tuplets: Tuplet[];
        glissandos: Glissando[];
        dynamics: Dynamics[];
        fermatas: Fermata[];
        accidentalMarks: AccidentalMark[];
        ornaments: Ornaments[];
        arpeggiates: Arpeggiate[];
        nonArpeggiates: NonArpeggiate[];
        otherNotations: OtherNotation[];
    }
    export function xmlToNotations(node: Node): Notations;
    export interface Tied extends LineType, DashedFormatting, Position, Placement, Orientation, Bezier, Color {
        number_?: number;
        type: StartStopContinue;
    }
    export interface TiedComplete extends LineTypeComplete, DashedFormattingComplete, PositionComplete, PlacementComplete, OrientationComplete, BezierComplete, ColorComplete {
        number_: number;
        type: StartStopContinue;
    }
    export function xmlToTied(node: Node): Tied;
    export interface Slur extends LineType, DashedFormatting, Position, Placement, Orientation, Bezier, Color {
        number_?: number;
        type: StartStopContinue;
    }
    export interface SlurComplete extends LineTypeComplete, DashedFormattingComplete, PositionComplete, PlacementComplete, OrientationComplete, BezierComplete, ColorComplete {
        number_: number;
        type: StartStopContinue;
    }
    export function xmlToSlur(node: Node): Slur;
    export enum ActualBothNone {
        None = 2,
        Both = 1,
        Actual = 0,
    }
    export function getActualBothNone(node: Node, fallbackVal?: ActualBothNone): ActualBothNone;
    export interface Tuplet extends LineShape, Position, Placement {
        bracket?: boolean;
        number_: number;
        showNumber?: ActualBothNone;
        tupletNormal?: TupletNormal;
        type: StartStop;
        showType?: ActualBothNone;
        tupletActual?: TupletActual;
    }
    export interface TupletComplete extends LineShapeComplete, PositionComplete, PlacementComplete {
        bracket: boolean;
        number_: number;
        showNumber: ActualBothNone;
        tupletNormal: TupletNormal;
        type: StartStop;
        showType: ActualBothNone;
        tupletActual: TupletActual;
    }
    export function xmlToTuplet(node: Node): Tuplet;
    export interface TupletActual {
        tupletNumber?: TupletNumber;
        tupletDots?: TupletDot[];
        tupletType?: TupletType;
    }
    export interface TupletActualComplete {
        tupletNumber: TupletNumber;
        tupletDots: TupletDot[];
        tupletType: TupletType;
    }
    export function xmlToTupletActual(node: Node): TupletActual;
    export interface TupletNormal {
        tupletNumber?: TupletNumber;
        tupletDots?: TupletDot[];
        tupletType?: TupletType;
    }
    export interface TupletNormalComplete {
        tupletNumber: TupletNumber;
        tupletDots: TupletDot[];
        tupletType: TupletType;
    }
    export function xmlToTupletNormal(node: Node): TupletNormal;
    export interface TupletNumber extends Font, Color {
        text: string;
    }
    export interface TupletNumberComplete extends FontComplete, ColorComplete {
        text: string;
    }
    export function xmlToTupletNumber(node: Node): TupletNumber;
    export interface TupletType extends Font, Color {
        text: string;
    }
    export interface TupletTypeComplete extends FontComplete, ColorComplete {
        text: string;
    }
    export function xmlToTupletType(node: Node): TupletType;
    export interface TupletDot extends Font, Color {
    }
    export interface TupletDotComplete extends FontComplete, ColorComplete {
    }
    export function xmlToTupletDot(node: Node): TupletDot;
    export interface Glissando extends LineType, DashedFormatting, PrintStyle {
        text?: string;
        type: StartStop;
        normal?: number;
    }
    export interface GlissandoComplete extends LineTypeComplete, DashedFormattingComplete, PrintStyleComplete {
        text: string;
        type: StartStop;
        normal: number;
    }
    export function xmlToGlissando(node: Node): Glissando;
    export interface Slide extends LineType, DashedFormatting, PrintStyle, BendSound {
        text?: string;
        type: StartStop;
        normal?: number;
    }
    export interface SlideComplete extends LineTypeComplete, DashedFormattingComplete, PrintStyleComplete, BendSoundComplete {
        text: string;
        type: StartStop;
        normal: number;
    }
    export function xmlToSlide(node: Node): Slide;
    export interface OtherNotation extends PrintObject, PrintStyle, Placement {
        type: StartStopSingle;
        data?: string;
    }
    export interface OtherNotationComplete extends PrintObjectComplete, PrintStyleComplete, PlacementComplete {
        type: StartStopSingle;
        data: string;
    }
    export function xmlToOtherNotation(node: Node): OtherNotation;
    export interface OtherDirection extends PrintObject, PrintStyleAlign {
        data: string;
    }
    export interface OtherDirectionComplete extends PrintObjectComplete, PrintStyleAlignComplete {
        data: string;
    }
    export function xmlToOtherDirection(node: Node): OtherDirection;
    export interface Ornaments extends PrintStyle, Placement, TrillSound {
        delayedInvertedTurn?: DelayedInvertedTurn;
        shake?: Shake;
        turn?: Turn;
        invertedTurn?: InvertedTurn;
        otherOrnament?: OtherOrnament;
        delayedTurn?: DelayedTurn;
        verticalTurn?: VerticalTurn;
        wavyLine?: WavyLine;
        tremolo?: Tremolo;
        accidentalMarks?: AccidentalMark[];
        trillMark?: TrillMark;
        mordent?: Mordent;
        invertedMordent?: InvertedMordent;
        schleifer?: Schleifer;
    }
    export interface OrnamentsComplete extends PrintStyleComplete, PlacementComplete, TrillSoundComplete {
        delayedInvertedTurn: DelayedInvertedTurn;
        shake: Shake;
        turn: Turn;
        invertedTurn: InvertedTurn;
        otherOrnament: OtherOrnament;
        delayedTurn: DelayedTurn;
        verticalTurn: VerticalTurn;
        wavyLine: WavyLine;
        tremolo: Tremolo;
        accidentalMarks: AccidentalMark[];
        trillMark: TrillMark;
        mordent: Mordent;
        invertedMordent: InvertedMordent;
        schleifer: Schleifer;
    }
    export function xmlToOrnaments(node: Node): Ornaments;
    export interface TrillMark extends PrintStyle, Placement, TrillSound {
    }
    export interface TrillMarkComplete extends PrintStyleComplete, PlacementComplete, TrillSoundComplete {
    }
    export function xmlToTrillMark(node: Node): TrillMark;
    export interface Turn extends PrintStyle, Placement, TrillSound {
        slash?: boolean;
    }
    export interface TurnComplete extends PrintStyleComplete, PlacementComplete, TrillSoundComplete {
        slash: boolean;
    }
    export function xmlToTurn(node: Node): Turn;
    export interface DelayedTurn extends PrintStyle, Placement, TrillSound {
        slash?: boolean;
    }
    export interface DelayedTurnComplete extends PrintStyleComplete, PlacementComplete, TrillSoundComplete {
        slash: boolean;
    }
    export function xmlToDelayedTurn(node: Node): DelayedTurn;
    export interface InvertedTurn extends PrintStyle, Placement, TrillSound {
        slash?: boolean;
    }
    export interface InvertedTurnComplete extends PrintStyleComplete, PlacementComplete, TrillSoundComplete {
        slash: boolean;
    }
    export function xmlToInvertedTurn(node: Node): InvertedTurn;
    export interface DelayedInvertedTurn extends PrintStyle, Placement, TrillSound {
        slash?: boolean;
    }
    export interface DelayedInvertedTurnComplete extends PrintStyleComplete, PlacementComplete, TrillSoundComplete {
        slash: boolean;
    }
    export function xmlToDelayedInvertedTurn(node: Node): DelayedInvertedTurn;
    export interface VerticalTurn extends PrintStyle, Placement, TrillSound {
    }
    export interface VerticalTurnComplete extends PrintStyleComplete, PlacementComplete, TrillSoundComplete {
    }
    export function xmlToVerticalTurn(node: Node): VerticalTurn;
    export interface Shake extends PrintStyle, Placement, TrillSound {
    }
    export interface ShakeComplete extends PrintStyleComplete, PlacementComplete, TrillSoundComplete {
    }
    export function xmlToShake(node: Node): Shake;
    export interface Mordent extends PrintStyle, Placement, TrillSound {
        long_?: boolean;
        approach?: AboveBelow;
        departure?: AboveBelow;
    }
    export interface MordentComplete extends PrintStyleComplete, PlacementComplete, TrillSoundComplete {
        long_: boolean;
        approach: AboveBelow;
        departure: AboveBelow;
    }
    export function xmlToMordent(node: Node): Mordent;
    export interface InvertedMordent extends PrintStyle, Placement, TrillSound {
        long_?: boolean;
        approach?: AboveBelow;
        departure?: AboveBelow;
    }
    export interface InvertedMordentComplete extends PrintStyleComplete, PlacementComplete, TrillSoundComplete {
        long_: boolean;
        approach: AboveBelow;
        departure: AboveBelow;
    }
    export function xmlToInvertedMordent(node: Node): InvertedMordent;
    export interface Schleifer extends PrintStyle, Placement {
    }
    export interface SchleiferComplete extends PrintStyleComplete, PlacementComplete {
    }
    export function xmlToSchleifer(node: Node): Schleifer;
    export interface Tremolo extends PrintStyle, Placement {
        data?: string;
        type: StartStopSingle;
    }
    export interface TremoloComplete extends PrintStyleComplete, PlacementComplete {
        data: string;
        type: StartStopSingle;
    }
    export function xmlToTremolo(node: Node): Tremolo;
    export interface OtherOrnament extends PrintStyle, Placement {
        type: StartStopSingle;
        data?: string;
    }
    export interface OtherOrnamentComplete extends PrintStyleComplete, PlacementComplete {
        type: StartStopSingle;
        data: string;
    }
    export function xmlToOtherOrnament(node: Node): OtherOrnament;
    export interface AccidentalMark extends PrintStyle, Placement {
        mark: string;
    }
    export interface AccidentalMarkComplete extends PrintStyleComplete, PlacementComplete {
        mark: string;
    }
    export function xmlToAccidentalMark(node: Node): AccidentalMark;
    export interface Technical {
        tripleTongue?: TripleTongue;
        toe?: Toe;
        hole?: Hole;
        hammerOn?: HammerOn;
        upBow?: UpBow;
        downBow?: DownBow;
        fret?: Fret;
        tap?: Tap;
        pullOff?: PullOff;
        handbell?: Handbell;
        bend?: Bend;
        thumbPosition?: ThumbPosition;
        stopped?: Stopped;
        pluck?: Pluck;
        doubleTongue?: DoubleTongue;
        string_?: String;
        openString?: OpenString;
        fingernails?: Fingernails;
        arrow?: Arrow;
        harmonic?: Harmonic;
        heel?: Heel;
        otherTechnical?: OtherTechnical;
        snapPizzicato?: SnapPizzicato;
        fingering?: Fingering;
    }
    export interface TechnicalComplete {
        tripleTongue: TripleTongue;
        toe: Toe;
        hole: Hole;
        hammerOn: HammerOn;
        upBow: UpBow;
        downBow: DownBow;
        fret: Fret;
        tap: Tap;
        pullOff: PullOff;
        handbell: Handbell;
        bend: Bend;
        thumbPosition: ThumbPosition;
        stopped: Stopped;
        pluck: Pluck;
        doubleTongue: DoubleTongue;
        string_: String;
        openString: OpenString;
        fingernails: Fingernails;
        arrow: Arrow;
        harmonic: Harmonic;
        heel: Heel;
        otherTechnical: OtherTechnical;
        snapPizzicato: SnapPizzicato;
        fingering: Fingering;
    }
    export function xmlToTechnical(node: Node): Technical;
    export interface UpBow extends PrintStyle, Placement {
    }
    export interface UpBowComplete extends PrintStyleComplete, PlacementComplete {
    }
    export function xmlToUpBow(node: Node): UpBow;
    export interface DownBow extends PrintStyle, Placement {
    }
    export interface DownBowComplete extends PrintStyleComplete, PlacementComplete {
    }
    export function xmlToDownBow(node: Node): DownBow;
    export interface Harmonic extends PrintObject, PrintStyle, Placement {
        artificial: boolean;
        touchingPitch: boolean;
        soundingPitch: boolean;
        natural: boolean;
        basePitch: boolean;
    }
    export interface HarmonicComplete extends PrintObjectComplete, PrintStyleComplete, PlacementComplete {
        artificial: boolean;
        touchingPitch: boolean;
        soundingPitch: boolean;
        natural: boolean;
        basePitch: boolean;
    }
    export function xmlToHarmonic(node: Node): Harmonic;
    export interface OpenString extends PrintStyle, Placement {
    }
    export interface OpenStringComplete extends PrintStyleComplete, PlacementComplete {
    }
    export function xmlToOpenString(node: Node): OpenString;
    export interface ThumbPosition extends PrintStyle, Placement {
    }
    export interface ThumbPositionComplete extends PrintStyleComplete, PlacementComplete {
    }
    export function xmlToThumbPosition(node: Node): ThumbPosition;
    export interface Pluck extends PrintStyle, Placement {
        data: string;
    }
    export interface PluckComplete extends PrintStyleComplete, PlacementComplete {
        data: string;
    }
    export function xmlToPluck(node: Node): Pluck;
    export interface DoubleTongue extends PrintStyle, Placement {
    }
    export interface DoubleTongueComplete extends PrintStyleComplete, PlacementComplete {
    }
    export function xmlToDoubleTongue(node: Node): DoubleTongue;
    export interface TripleTongue extends PrintStyle, Placement {
    }
    export interface TripleTongueComplete extends PrintStyleComplete, PlacementComplete {
    }
    export function xmlToTripleTongue(node: Node): TripleTongue;
    export interface Stopped extends PrintStyle, Placement {
    }
    export interface StoppedComplete extends PrintStyleComplete, PlacementComplete {
    }
    export function xmlToStopped(node: Node): Stopped;
    export interface SnapPizzicato extends PrintStyle, Placement {
    }
    export interface SnapPizzicatoComplete extends PrintStyleComplete, PlacementComplete {
    }
    export function xmlToSnapPizzicato(node: Node): SnapPizzicato;
    export interface HammerOn extends PrintStyle, Placement {
        number_?: number;
        type: StartStop;
        data?: string;
    }
    export interface HammerOnComplete extends PrintStyleComplete, PlacementComplete {
        number_: number;
        type: StartStop;
        data: string;
    }
    export function xmlToHammerOn(node: Node): HammerOn;
    export interface PullOff extends PrintStyle, Placement {
        number_?: number;
        type: StartStop;
        data?: string;
    }
    export interface PullOffComplete extends PrintStyleComplete, PlacementComplete {
        number_: number;
        type: StartStop;
        data: string;
    }
    export function xmlToPullOff(node: Node): PullOff;
    export interface Bend extends PrintStyle, BendSound {
        bendAlter: string;
        withBar?: WithBar;
        preBend: boolean;
        release: boolean;
    }
    export interface BendComplete extends PrintStyleComplete, BendSoundComplete {
        bendAlter: string;
        withBar: WithBar;
        preBend: boolean;
        release: boolean;
    }
    export function xmlToBend(node: Node): Bend;
    export interface WithBar extends PrintStyle, Placement {
        data: string;
    }
    export interface WithBarComplete extends PrintStyleComplete, PlacementComplete {
        data: string;
    }
    export function xmlToWithBar(node: Node): WithBar;
    export interface Tap extends PrintStyle, Placement {
        data: string;
    }
    export interface TapComplete extends PrintStyleComplete, PlacementComplete {
        data: string;
    }
    export function xmlToTap(node: Node): Tap;
    export interface Heel extends PrintStyle, Placement {
        substitution?: boolean;
    }
    export interface HeelComplete extends PrintStyleComplete, PlacementComplete {
        substitution: boolean;
    }
    export function xmlToHeel(node: Node): Heel;
    export interface Toe extends PrintStyle, Placement {
        substitution?: boolean;
    }
    export interface ToeComplete extends PrintStyleComplete, PlacementComplete {
        substitution: boolean;
    }
    export function xmlToToe(node: Node): Toe;
    export interface Fingernails extends PrintStyle, Placement {
    }
    export interface FingernailsComplete extends PrintStyleComplete, PlacementComplete {
    }
    export function xmlToFingernails(node: Node): Fingernails;
    export interface Hole extends PrintStyle, Placement {
        holeClosed: HoleClosed;
        holeShape: string;
        holeType?: string;
    }
    export interface HoleComplete extends PrintStyleComplete, PlacementComplete {
        holeClosed: HoleClosed;
        holeShape: string;
        holeType: string;
    }
    export function xmlToHole(node: Node): Hole;
    export enum HoleLocation {
        Right = 0,
        Top = 3,
        Bottom = 1,
        Left = 2,
    }
    export function getHoleLocation(node: Node, fallbackVal?: HoleLocation): HoleLocation;
    export enum HoleClosedType {
        No = 1,
        Yes = 0,
        Half = 2,
    }
    export function getHoleClosedType(node: Node, fallbackVal?: HoleClosedType): HoleClosedType;
    export interface HoleClosed {
        location?: HoleLocation;
        data: HoleClosedType;
    }
    export interface HoleClosedComplete {
        location: HoleLocation;
        data: HoleClosedType;
    }
    export function xmlToHoleClosed(node: Node): HoleClosed;
    export interface Arrow extends PrintStyle, Placement {
        arrowStyle?: string;
        arrowDirection?: string;
        circularArrow?: string;
    }
    export interface ArrowComplete extends PrintStyleComplete, PlacementComplete {
        arrowStyle: string;
        arrowDirection: string;
        circularArrow: string;
    }
    export function xmlToArrow(node: Node): Arrow;
    export interface Handbell extends PrintStyle, Placement {
        data: string;
    }
    export interface HandbellComplete extends PrintStyleComplete, PlacementComplete {
        data: string;
    }
    export function xmlToHandbell(node: Node): Handbell;
    export interface OtherTechnical extends PrintStyle, Placement {
        data: string;
    }
    export interface OtherTechnicalComplete extends PrintStyleComplete, PlacementComplete {
        data: string;
    }
    export function xmlToOtherTechnical(node: Node): OtherTechnical;
    export interface Articulations {
        accent?: Accent;
        doit?: Doit;
        breathMark?: BreathMark;
        otherArticulations?: OtherArticulation[];
        detachedLegato?: DetachedLegato;
        staccatissimo?: Staccatissimo;
        plop?: Plop;
        unstress?: Unstress;
        strongAccent?: StrongAccent;
        staccato?: Staccato;
        spiccato?: Spiccato;
        scoop?: Scoop;
        falloff?: Falloff;
        caesura?: Caesura;
        stress?: Stress;
        tenuto?: Tenuto;
    }
    export interface ArticulationsComplete {
        accent: Accent;
        doit: Doit;
        breathMark: BreathMark;
        otherArticulations: OtherArticulation[];
        detachedLegato: DetachedLegato;
        staccatissimo: Staccatissimo;
        plop: Plop;
        unstress: Unstress;
        strongAccent: StrongAccent;
        staccato: Staccato;
        spiccato: Spiccato;
        scoop: Scoop;
        falloff: Falloff;
        caesura: Caesura;
        stress: Stress;
        tenuto: Tenuto;
    }
    export function xmlToArticulations(node: Node): Articulations;
    export interface Accent extends PrintStyle, Placement {
    }
    export interface AccentComplete extends PrintStyleComplete, PlacementComplete {
    }
    export function xmlToAccent(node: Node): Accent;
    export interface StrongAccent extends PrintStyle, Placement {
        type?: UpDown;
    }
    export interface StrongAccentComplete extends PrintStyleComplete, PlacementComplete {
        type: UpDown;
    }
    export function xmlToStrongAccent(node: Node): StrongAccent;
    export interface Staccato extends PrintStyle, Placement {
    }
    export interface StaccatoComplete extends PrintStyleComplete, PlacementComplete {
    }
    export function xmlToStaccato(node: Node): Staccato;
    export interface Tenuto extends PrintStyle, Placement {
    }
    export interface TenutoComplete extends PrintStyleComplete, PlacementComplete {
    }
    export function xmlToTenuto(node: Node): Tenuto;
    export interface DetachedLegato extends PrintStyle, Placement {
    }
    export interface DetachedLegatoComplete extends PrintStyleComplete, PlacementComplete {
    }
    export function xmlToDetachedLegato(node: Node): DetachedLegato;
    export interface Staccatissimo extends PrintStyle, Placement {
    }
    export interface StaccatissimoComplete extends PrintStyleComplete, PlacementComplete {
    }
    export function xmlToStaccatissimo(node: Node): Staccatissimo;
    export interface Spiccato extends PrintStyle, Placement {
    }
    export interface SpiccatoComplete extends PrintStyleComplete, PlacementComplete {
    }
    export function xmlToSpiccato(node: Node): Spiccato;
    export interface Scoop extends LineShape, LineType, DashedFormatting, PrintStyle, Placement {
    }
    export interface ScoopComplete extends LineShapeComplete, LineTypeComplete, DashedFormattingComplete, PrintStyleComplete, PlacementComplete {
    }
    export function xmlToScoop(node: Node): Scoop;
    export interface Plop extends LineShape, LineType, DashedFormatting, PrintStyle, Placement {
    }
    export interface PlopComplete extends LineShapeComplete, LineTypeComplete, DashedFormattingComplete, PrintStyleComplete, PlacementComplete {
    }
    export function xmlToPlop(node: Node): Plop;
    export interface Doit extends LineShape, LineType, DashedFormatting, PrintStyle, Placement {
    }
    export interface DoitComplete extends LineShapeComplete, LineTypeComplete, DashedFormattingComplete, PrintStyleComplete, PlacementComplete {
    }
    export function xmlToDoit(node: Node): Doit;
    export interface Falloff extends LineShape, LineType, DashedFormatting, PrintStyle, Placement {
    }
    export interface FalloffComplete extends LineShapeComplete, LineTypeComplete, DashedFormattingComplete, PrintStyleComplete, PlacementComplete {
    }
    export function xmlToFalloff(node: Node): Falloff;
    export enum BreathMarkType {
        Empty = 2,
        Comma = 0,
        Tick = 1,
    }
    export function getBreathMarkType(node: Node, fallbackVal?: BreathMarkType): BreathMarkType;
    export interface BreathMark extends LineShape, LineType, DashedFormatting, PrintStyle, Placement {
        type: BreathMarkType;
    }
    export interface BreathMarkComplete extends LineShapeComplete, LineTypeComplete, DashedFormattingComplete, PrintStyleComplete, PlacementComplete {
        type: BreathMarkType;
    }
    export function xmlToBreathMark(node: Node): BreathMark;
    export interface Caesura extends PrintStyle, Placement {
    }
    export interface CaesuraComplete extends PrintStyleComplete, PlacementComplete {
    }
    export function xmlToCaesura(node: Node): Caesura;
    export interface Stress extends PrintStyle, Placement {
    }
    export interface StressComplete extends PrintStyleComplete, PlacementComplete {
    }
    export function xmlToStress(node: Node): Stress;
    export interface Unstress extends PrintStyle, Placement {
    }
    export interface UnstressComplete extends PrintStyleComplete, PlacementComplete {
    }
    export function xmlToUnstress(node: Node): Unstress;
    export interface OtherArticulation extends PrintStyle, Placement {
        data: string;
    }
    export interface OtherArticulationComplete extends PrintStyleComplete, PlacementComplete {
        data: string;
    }
    export function xmlToOtherArticulation(node: Node): OtherArticulation;
    export interface Arpeggiate extends Position, Placement, Color {
        number_?: number;
        direction?: UpDown;
    }
    export interface ArpeggiateComplete extends PositionComplete, PlacementComplete, ColorComplete {
        number_: number;
        direction: UpDown;
    }
    export function xmlToArpeggiate(node: Node): Arpeggiate;
    export interface NonArpeggiate extends Position, Placement, Color {
        number_?: number;
        type: TopBottom;
    }
    export interface NonArpeggiateComplete extends PositionComplete, PlacementComplete, ColorComplete {
        number_: number;
        type: TopBottom;
    }
    export function xmlToNonArpeggiate(node: Node): NonArpeggiate;
    export interface Lyric extends Justify, Position, Placement, Color, PrintObject, Editorial {
        extend?: Extend;
        endLine: boolean;
        syllabics?: Syllabic[];
        texts?: Text[];
        laughing: boolean;
        humming: boolean;
        number_?: number;
        endParagraph: boolean;
        elisions?: Elision[];
        name?: string;
    }
    export interface LyricComplete extends JustifyComplete, PositionComplete, PlacementComplete, ColorComplete, PrintObjectComplete, EditorialComplete {
        extend: Extend;
        endLine: boolean;
        syllabics: Syllabic[];
        texts: Text[];
        laughing: boolean;
        humming: boolean;
        number_: number;
        endParagraph: boolean;
        elisions: Elision[];
        name: string;
    }
    export function xmlToLyric(node: Node): Lyric;
    export interface Text extends Font, Color, TextDecoration, TextRotation, LetterSpacing, TextDirection {
        data: string;
    }
    export interface TextComplete extends FontComplete, ColorComplete, TextDecorationComplete, TextRotationComplete, LetterSpacingComplete, TextDirectionComplete {
        data: string;
    }
    export function xmlToText(node: Node): Text;
    export interface Syllabic extends Font, Color {
        data: string;
    }
    export interface SyllabicComplete extends FontComplete, ColorComplete {
        data: string;
    }
    export function xmlToSyllabic(node: Node): Syllabic;
    export interface Elision extends Font, Color {
        data: string;
    }
    export interface ElisionComplete extends FontComplete, ColorComplete {
        data: string;
    }
    export function xmlToElision(node: Node): Elision;
    export interface Extend extends PrintStyle {
        type?: StartStopContinue;
    }
    export interface ExtendComplete extends PrintStyleComplete {
        type: StartStopContinue;
    }
    export function xmlToExtend(node: Node): Extend;
    export interface FiguredBass extends Editorial, PrintStyle, Printout {
        figures: Figure[];
        duration?: number;
        parentheses?: boolean;
    }
    export interface FiguredBassComplete extends EditorialComplete, PrintStyleComplete, PrintoutComplete {
        figures: Figure[];
        duration: number;
        parentheses: boolean;
    }
    export function xmlToFiguredBass(node: Node): FiguredBass;
    export interface Figure extends PrintStyle {
        prefix?: Prefix;
        figureNumber?: FigureNumber;
        extend?: Extend;
        suffix?: Suffix;
    }
    export interface FigureComplete extends PrintStyleComplete {
        prefix: Prefix;
        figureNumber: FigureNumber;
        extend: Extend;
        suffix: Suffix;
    }
    export function xmlToFigure(node: Node): Figure;
    export interface Prefix extends PrintStyle {
        data: string;
    }
    export interface PrefixComplete extends PrintStyleComplete {
        data: string;
    }
    export function xmlToPrefix(node: Node): Prefix;
    export interface FigureNumber extends PrintStyle {
        data: string;
    }
    export interface FigureNumberComplete extends PrintStyleComplete {
        data: string;
    }
    export function xmlToFigureNumber(node: Node): FigureNumber;
    export interface Suffix extends PrintStyle {
        data: string;
    }
    export interface SuffixComplete extends PrintStyleComplete {
        data: string;
    }
    export function xmlToSuffix(node: Node): Suffix;
    export interface Backup extends Editorial {
        duration: number;
    }
    export interface BackupComplete extends EditorialComplete {
        duration: number;
    }
    export function xmlToBackup(node: Node): Backup;
    export interface Forward extends EditorialVoice {
        duration: number;
        staff?: Staff;
    }
    export interface ForwardComplete extends EditorialVoiceComplete {
        duration: number;
        staff: Staff;
    }
    export function xmlToForward(node: Node): Forward;
    export enum BarlineLocation {
        Right = 1,
        Middle = 2,
        Left = 0,
    }
    export function getBarlineLocation(node: Node, fallbackVal?: BarlineLocation): BarlineLocation;
    export interface Barline extends Editorial {
        segno?: Segno;
        coda?: Coda;
        location?: BarlineLocation;
        codaAttrib: string;
        wavyLine?: WavyLine;
        fermatas?: Fermata[];
        segnoAttrib: string;
        divisions: string;
        barStyle?: BarStyle;
        ending?: Ending;
        repeat?: Repeat;
    }
    export interface BarlineComplete extends EditorialComplete {
        segno: Segno;
        coda: Coda;
        location: BarlineLocation;
        codaAttrib: string;
        wavyLine: WavyLine;
        fermatas: Fermata[];
        segnoAttrib: string;
        divisions: string;
        barStyle: BarStyle;
        ending: Ending;
        repeat: Repeat;
    }
    export function xmlToBarline(node: Node): Barline;
    export enum BarStyleType {
        Regular = 0,
        LightHeavy = 5,
        HeavyLight = 6,
        Short = 9,
        None = 10,
        Dashed = 2,
        HeavyHeavy = 7,
        Tick = 8,
        Dotted = 1,
        Heavy = 3,
        LightLight = 4,
    }
    export function getBarStyleType(node: Node, fallbackVal?: BarStyleType): BarStyleType;
    export interface BarStyle extends Color {
        data: BarStyleType;
    }
    export interface BarStyleComplete extends ColorComplete {
        data: BarStyleType;
    }
    export function xmlToBarStyle(node: Node): BarStyle;
    export enum StartStopDiscontinue {
        Discontinue = 2,
        Start = 0,
        Stop = 1,
    }
    export function getStartStopDiscontinue(node: Node, fallbackVal?: StartStopDiscontinue): StartStopDiscontinue;
    export interface Ending extends PrintObject, PrintStyle {
        endLength: number;
        textX: number;
        number_: number;
        textY: number;
        type: StartStopDiscontinue;
        ending?: string;
    }
    export interface EndingComplete extends PrintObjectComplete, PrintStyleComplete {
        endLength: number;
        textX: number;
        number_: number;
        textY: number;
        type: StartStopDiscontinue;
        ending: string;
    }
    export function xmlToEnding(node: Node): Ending;
    export enum WingedType {
        None = 0,
        Curved = 2,
        DoubleCurved = 4,
        Straight = 1,
        DoubleStraight = 3,
    }
    export function getWingedType(node: Node, fallbackVal?: WingedType): WingedType;
    export enum DirectionTypeBg {
        Forward = 1,
        Backward = 0,
    }
    export function getDirectionTypeBg(node: Node, fallbackVal?: DirectionTypeBg): DirectionTypeBg;
    export interface Repeat {
        times: string;
        winged: WingedType;
        direction: DirectionTypeBg;
    }
    export interface RepeatComplete {
        times: string;
        winged: WingedType;
        direction: DirectionTypeBg;
    }
    export function xmlToRepeat(node: Node): Repeat;
    export enum TipDirection {
        Right = 3,
        Northwest = 4,
        Southwest = 7,
        Down = 1,
        Northeast = 5,
        Southeast = 6,
        Up = 0,
        Left = 2,
    }
    export function getTipDirection(node: Node, fallbackVal?: TipDirection): TipDirection;
    export interface Direction extends EditorialVoice, Placement, Directive {
        directionTypes: DirectionType[];
        staff?: Staff;
        offset?: Offset;
        sound?: Sound;
    }
    export interface DirectionComplete extends EditorialVoiceComplete, PlacementComplete, DirectiveComplete {
        directionTypes: DirectionType[];
        staff: Staff;
        offset: Offset;
        sound: Sound;
    }
    export function xmlToDirection(node: Node): Direction;
    export interface DirectionType {
        percussions: Percussion[];
        rehearsals: Rehearsal[];
        pedal: Pedal;
        principalVoice: PrincipalVoice;
        accordionRegistration: AccordionRegistration;
        eyeglasses: Eyeglasses;
        image: Image;
        harpPedals: HarpPedals;
        metronome: Metronome;
        otherDirection: OtherDirection;
        segnos: Segno[];
        scordatura: Scordatura;
        stringMute: StringMute;
        wedge?: Wedge;
        dashes?: Dashes;
        damp: Damp;
        bracket: Bracket;
        dynamics?: Dynamics;
        octaveShift: OctaveShift;
        words: Words[];
        dampAll: DampAll;
        codas: Coda[];
    }
    export interface DirectionTypeComplete {
        percussions: Percussion[];
        rehearsals: Rehearsal[];
        pedal: Pedal;
        principalVoice: PrincipalVoice;
        accordionRegistration: AccordionRegistration;
        eyeglasses: Eyeglasses;
        image: Image;
        harpPedals: HarpPedals;
        metronome: Metronome;
        otherDirection: OtherDirection;
        segnos: Segno[];
        scordatura: Scordatura;
        stringMute: StringMute;
        wedge: Wedge;
        dashes: Dashes;
        damp: Damp;
        bracket: Bracket;
        dynamics: Dynamics;
        octaveShift: OctaveShift;
        words: Words[];
        dampAll: DampAll;
        codas: Coda[];
    }
    export function xmlToDirectionType(node: Node): DirectionType;
    export interface Rehearsal extends TextFormatting {
        data: string;
    }
    export interface RehearsalComplete extends TextFormattingComplete {
        data: string;
    }
    export function xmlToRehearsal(node: Node): Rehearsal;
    export interface Words extends TextFormatting {
        data: string;
    }
    export interface WordsComplete extends TextFormattingComplete {
        data: string;
    }
    export function xmlToWords(node: Node): Words;
    export enum WedgeType {
        Diminuendo = 1,
        Crescendo = 0,
        Stop = 2,
        Continue = 3,
    }
    export function getWedgeType(node: Node, fallbackVal?: WedgeType): WedgeType;
    export interface Wedge extends LineType, DashedFormatting, Position, Color {
        number_: number;
        neinte: boolean;
        type: WedgeType;
        spread: number;
    }
    export interface WedgeComplete extends LineTypeComplete, DashedFormattingComplete, PositionComplete, ColorComplete {
        number_: number;
        neinte: boolean;
        type: WedgeType;
        spread: number;
    }
    export function xmlToWedge(node: Node): Wedge;
    export interface Dashes extends DashedFormatting, Position, Color {
        number_: number;
        type: StartStopContinue;
    }
    export interface DashesComplete extends DashedFormattingComplete, PositionComplete, ColorComplete {
        number_: number;
        type: StartStopContinue;
    }
    export function xmlToDashes(node: Node): Dashes;
    export enum LineEndType {
        None = 4,
        Both = 2,
        Arrow = 3,
        Down = 1,
        Up = 0,
    }
    export function getLineEndType(node: Node, fallbackVal?: LineEndType): LineEndType;
    export interface Bracket extends LineType, DashedFormatting, Position, Color {
        endLength: number;
        number_: number;
        type: StartStopContinue;
        lineEnd: LineEndType;
    }
    export interface BracketComplete extends LineTypeComplete, DashedFormattingComplete, PositionComplete, ColorComplete {
        endLength: number;
        number_: number;
        type: StartStopContinue;
        lineEnd: LineEndType;
    }
    export function xmlToBracket(node: Node): Bracket;
    export enum PedalType {
        Change = 3,
        Start = 0,
        Stop = 1,
        Continue = 2,
    }
    export function getPedalType(node: Node, fallbackVal?: PedalType): PedalType;
    export interface Pedal extends PrintStyleAlign {
        line: boolean;
        sign: boolean;
        type: PedalType;
    }
    export interface PedalComplete extends PrintStyleAlignComplete {
        line: boolean;
        sign: boolean;
        type: PedalType;
    }
    export function xmlToPedal(node: Node): Pedal;
    export interface Metronome extends PrintStyleAlign, Justify {
        metronomeNotes: MetronomeNote[];
        perMinute: PerMinute;
        parentheses: boolean;
        beatUnit: string;
        beatUnitDots: BeatUnitDot[];
        metronomeRelation: string;
    }
    export interface MetronomeComplete extends PrintStyleAlignComplete, JustifyComplete {
        metronomeNotes: MetronomeNote[];
        perMinute: PerMinute;
        parentheses: boolean;
        beatUnit: string;
        beatUnitDots: BeatUnitDot[];
        metronomeRelation: string;
    }
    export function xmlToMetronome(node: Node): Metronome;
    export interface BeatUnitDot {
    }
    export interface BeatUnitDotComplete {
    }
    export function xmlToBeatUnitDot(node: Node): BeatUnitDot;
    export interface PerMinute extends Font {
        data: string;
    }
    export interface PerMinuteComplete extends FontComplete {
        data: string;
    }
    export function xmlToPerMinute(node: Node): PerMinute;
    export interface MetronomeNote {
        metronomeDots: MetronomeDot[];
        metronomeBeams: MetronomeBeam[];
        metronomeType: string;
        metronomeTuplet: MetronomeTuplet;
    }
    export interface MetronomeNoteComplete {
        metronomeDots: MetronomeDot[];
        metronomeBeams: MetronomeBeam[];
        metronomeType: string;
        metronomeTuplet: MetronomeTuplet;
    }
    export function xmlToMetronomeNote(node: Node): MetronomeNote;
    export interface MetronomeDot {
    }
    export interface MetronomeDotComplete {
    }
    export function xmlToMetronomeDot(node: Node): MetronomeDot;
    export interface MetronomeBeam {
        number_: number;
        data: string;
    }
    export interface MetronomeBeamComplete {
        number_: number;
        data: string;
    }
    export function xmlToMetronomeBeam(node: Node): MetronomeBeam;
    export interface MetronomeTuplet {
        actualNotes: ActualNotes;
        bracket: boolean;
        showNumber: ActualBothNone;
        normalType: string;
        type: StartStop;
        normalNotes: NormalNotes;
        normalDots: NormalDot[];
    }
    export interface MetronomeTupletComplete {
        actualNotes: ActualNotes;
        bracket: boolean;
        showNumber: ActualBothNone;
        normalType: string;
        type: StartStop;
        normalNotes: NormalNotes;
        normalDots: NormalDot[];
    }
    export function xmlToMetronomeTuplet(node: Node): MetronomeTuplet;
    export enum OctaveShiftType {
        Down = 2,
        Stop = 3,
        Up = 1,
        Continue = 4,
    }
    export function getOctaveShiftType(node: Node, fallbackVal?: OctaveShiftType): OctaveShiftType;
    export interface OctaveShift extends DashedFormatting, PrintStyle {
        number_: number;
        size: number;
        type: OctaveShiftType;
    }
    export interface OctaveShiftComplete extends DashedFormattingComplete, PrintStyleComplete {
        number_: number;
        size: number;
        type: OctaveShiftType;
    }
    export function xmlToOctaveShift(node: Node): OctaveShift;
    export interface HarpPedals extends PrintStyleAlign {
        pedalTunings: PedalTuning[];
    }
    export interface HarpPedalsComplete extends PrintStyleAlignComplete {
        pedalTunings: PedalTuning[];
    }
    export function xmlToHarpPedals(node: Node): HarpPedals;
    export interface PedalTuning {
        pedalStep: string;
        pedalAlter: string;
    }
    export interface PedalTuningComplete {
        pedalStep: string;
        pedalAlter: string;
    }
    export function xmlToPedalTuning(node: Node): PedalTuning;
    export interface Damp extends PrintStyleAlign {
    }
    export interface DampComplete extends PrintStyleAlignComplete {
    }
    export function xmlToDamp(node: Node): Damp;
    export interface DampAll extends PrintStyleAlign {
    }
    export interface DampAllComplete extends PrintStyleAlignComplete {
    }
    export function xmlToDampAll(node: Node): DampAll;
    export interface Eyeglasses extends PrintStyleAlign {
    }
    export interface EyeglassesComplete extends PrintStyleAlignComplete {
    }
    export function xmlToEyeglasses(node: Node): Eyeglasses;
    export interface StringMute extends PrintStyleAlign {
        type: string;
    }
    export interface StringMuteComplete extends PrintStyleAlignComplete {
        type: string;
    }
    export function xmlToStringMute(node: Node): StringMute;
    export interface Scordatura {
        accords: Accord[];
    }
    export interface ScordaturaComplete {
        accords: Accord[];
    }
    export function xmlToScordatura(node: Node): Scordatura;
    export interface Accord {
        tuningAlter: TuningAlter;
        string_: string;
        tuningStep: string;
        tuningOctave: TuningOctave;
    }
    export interface AccordComplete {
        tuningAlter: TuningAlter;
        string_: string;
        tuningStep: string;
        tuningOctave: TuningOctave;
    }
    export function xmlToAccord(node: Node): Accord;
    export interface Image extends Position, Halign, ValignImage {
        type: string;
        source: string;
    }
    export interface ImageComplete extends PositionComplete, HalignComplete, ValignImageComplete {
        type: string;
        source: string;
    }
    export function xmlToImage(node: Node): Image;
    export enum VoiceSymbol {
        None = 4,
        Hauptstimme = 1,
        Nebenstimme = 2,
        Plain = 3,
    }
    export function getVoiceSymbol(node: Node, fallbackVal?: VoiceSymbol): VoiceSymbol;
    export interface PrincipalVoice extends PrintStyleAlign {
        symbol: VoiceSymbol;
        data?: string;
        type: StartStop;
    }
    export interface PrincipalVoiceComplete extends PrintStyleAlignComplete {
        symbol: VoiceSymbol;
        data: string;
        type: StartStop;
    }
    export function xmlToPrincipalVoice(node: Node): PrincipalVoice;
    export interface AccordionRegistration extends PrintStyleAlign {
        accordionMiddle: string;
        accordionHigh: boolean;
        accordionLow: boolean;
    }
    export interface AccordionRegistrationComplete extends PrintStyleAlignComplete {
        accordionMiddle: string;
        accordionHigh: boolean;
        accordionLow: boolean;
    }
    export function xmlToAccordionRegistration(node: Node): AccordionRegistration;
    export interface Percussion extends PrintStyleAlign, Enclosure {
        stickLocation: string;
        otherPercussion: string;
        wood: string;
        effect: string;
        glass: string;
        timpani: Timpani;
        stick: Stick;
        metal: string;
        pitched: string;
        membrane: string;
        beater: Beater;
    }
    export interface PercussionComplete extends PrintStyleAlignComplete, EnclosureComplete {
        stickLocation: string;
        otherPercussion: string;
        wood: string;
        effect: string;
        glass: string;
        timpani: Timpani;
        stick: Stick;
        metal: string;
        pitched: string;
        membrane: string;
        beater: Beater;
    }
    export function xmlToPercussion(node: Node): Percussion;
    export interface Timpani {
    }
    export interface TimpaniComplete {
    }
    export function xmlToTimpani(node: Node): Timpani;
    export interface Beater {
        data: string;
        tip: TipDirection;
    }
    export interface BeaterComplete {
        data: string;
        tip: TipDirection;
    }
    export function xmlToBeater(node: Node): Beater;
    export interface Stick {
        stickMaterial: string;
        stickType: string;
        tip: TipDirection;
    }
    export interface StickComplete {
        stickMaterial: string;
        stickType: string;
        tip: TipDirection;
    }
    export function xmlToStick(node: Node): Stick;
    export interface Offset {
        data: string;
        sound: boolean;
    }
    export interface OffsetComplete {
        data: string;
        sound: boolean;
    }
    export function xmlToOffset(node: Node): Offset;
    export interface HarmonyChord {
        root: Root;
        function_: Function;
        kind: Kind;
        degree: Degree;
        inversion: Inversion;
        bass: Bass;
    }
    export interface HarmonyChordComplete {
        root: Root;
        function_: Function;
        kind: Kind;
        degree: Degree;
        inversion: Inversion;
        bass: Bass;
    }
    export function xmlToHarmonyChord(node: Node): HarmonyChord;
    export enum ExplicitImpliedAlternate {
        Explicit = 1,
        Implied = 2,
        Alternate = 3,
    }
    export function getExplicitImpliedAlternate(node: Node, fallbackVal?: ExplicitImpliedAlternate): ExplicitImpliedAlternate;
    export interface Harmony extends HarmonyChord, Editorial, PrintObject, PrintStyle, Placement {
        frame: Frame;
        printFrame: boolean;
        staff: Staff;
        harmonyType: ExplicitImpliedAlternate;
        offset: Offset;
    }
    export interface HarmonyComplete extends HarmonyChordComplete, EditorialComplete, PrintObjectComplete, PrintStyleComplete, PlacementComplete {
        frame: Frame;
        printFrame: boolean;
        staff: Staff;
        harmonyType: ExplicitImpliedAlternate;
        offset: Offset;
    }
    export function xmlToHarmony(node: Node): Harmony;
    export interface Root {
        rootStep: RootStep;
        rootAlter: RootAlter;
    }
    export interface RootComplete {
        rootStep: RootStep;
        rootAlter: RootAlter;
    }
    export function xmlToRoot(node: Node): Root;
    export interface RootStep extends PrintStyle {
        text: string;
        data: string;
    }
    export interface RootStepComplete extends PrintStyleComplete {
        text: string;
        data: string;
    }
    export function xmlToRootStep(node: Node): RootStep;
    export interface RootAlter extends PrintObject, PrintStyle {
        location: LeftRight;
        data: string;
    }
    export interface RootAlterComplete extends PrintObjectComplete, PrintStyleComplete {
        location: LeftRight;
        data: string;
    }
    export function xmlToRootAlter(node: Node): RootAlter;
    export interface Function extends PrintStyle {
        data: string;
    }
    export interface FunctionComplete extends PrintStyleComplete {
        data: string;
    }
    export function xmlToFunction(node: Node): Function;
    export interface Kind extends PrintStyle, Halign, Valign {
        parenthesesDegrees: boolean;
        useSymbols: boolean;
        text: string;
        data: string;
        stackDegrees: boolean;
        bracketDegrees: boolean;
    }
    export interface KindComplete extends PrintStyleComplete, HalignComplete, ValignComplete {
        parenthesesDegrees: boolean;
        useSymbols: boolean;
        text: string;
        data: string;
        stackDegrees: boolean;
        bracketDegrees: boolean;
    }
    export function xmlToKind(node: Node): Kind;
    export interface Inversion extends PrintStyle {
        data: string;
    }
    export interface InversionComplete extends PrintStyleComplete {
        data: string;
    }
    export function xmlToInversion(node: Node): Inversion;
    export interface Bass {
        bassStep: BassStep;
        bassAlter: BassAlter;
    }
    export interface BassComplete {
        bassStep: BassStep;
        bassAlter: BassAlter;
    }
    export function xmlToBass(node: Node): Bass;
    export interface BassStep extends PrintStyle {
        text: string;
        data: string;
    }
    export interface BassStepComplete extends PrintStyleComplete {
        text: string;
        data: string;
    }
    export function xmlToBassStep(node: Node): BassStep;
    export interface BassAlter extends PrintObject, PrintStyle {
        location: LeftRight;
        data: string;
    }
    export interface BassAlterComplete extends PrintObjectComplete, PrintStyleComplete {
        location: LeftRight;
        data: string;
    }
    export function xmlToBassAlter(node: Node): BassAlter;
    export interface Degree extends PrintObject {
        degreeAlter: DegreeAlter;
        degreeValue: DegreeValue;
        degreeType: DegreeType;
    }
    export interface DegreeComplete extends PrintObjectComplete {
        degreeAlter: DegreeAlter;
        degreeValue: DegreeValue;
        degreeType: DegreeType;
    }
    export function xmlToDegree(node: Node): Degree;
    export enum ChordType {
        Augmented = 3,
        Diminished = 4,
        Major = 1,
        Minor = 2,
        HalfDiminished = 5,
    }
    export function getChordType(node: Node, fallbackVal?: ChordType): ChordType;
    export interface DegreeValue extends PrintStyle {
        symbol: ChordType;
        text: string;
        data: string;
    }
    export interface DegreeValueComplete extends PrintStyleComplete {
        symbol: ChordType;
        text: string;
        data: string;
    }
    export function xmlToDegreeValue(node: Node): DegreeValue;
    export interface DegreeAlter extends PrintStyle {
        plusMinus: boolean;
        data: string;
    }
    export interface DegreeAlterComplete extends PrintStyleComplete {
        plusMinus: boolean;
        data: string;
    }
    export function xmlToDegreeAlter(node: Node): DegreeAlter;
    export interface DegreeType extends PrintStyle {
        text: string;
        data: string;
    }
    export interface DegreeTypeComplete extends PrintStyleComplete {
        text: string;
        data: string;
    }
    export function xmlToDegreeType(node: Node): DegreeType;
    export interface Frame extends Position, Color, Halign, ValignImage {
        frameStrings: string;
        frameNotes: FrameNote[];
        unplayed: string;
        frameFrets: string;
        firstFret: FirstFret;
        width: number;
        height: number;
    }
    export interface FrameComplete extends PositionComplete, ColorComplete, HalignComplete, ValignImageComplete {
        frameStrings: string;
        frameNotes: FrameNote[];
        unplayed: string;
        frameFrets: string;
        firstFret: FirstFret;
        width: number;
        height: number;
    }
    export function xmlToFrame(node: Node): Frame;
    export interface FirstFret {
        text: string;
        location: LeftRight;
        data: string;
    }
    export interface FirstFretComplete {
        text: string;
        location: LeftRight;
        data: string;
    }
    export function xmlToFirstFret(node: Node): FirstFret;
    export interface FrameNote {
        barre: Barre;
        string_: String;
        fingering: Fingering;
        fret: Fret;
    }
    export interface FrameNoteComplete {
        barre: Barre;
        string_: String;
        fingering: Fingering;
        fret: Fret;
    }
    export function xmlToFrameNote(node: Node): FrameNote;
    export interface Barre extends Color {
        type: StartStop;
    }
    export interface BarreComplete extends ColorComplete {
        type: StartStop;
    }
    export function xmlToBarre(node: Node): Barre;
    export interface Grouping {
        features: Feature[];
        number_: number;
        groupingType: StartStopSingle;
        memberOf: string;
    }
    export interface GroupingComplete {
        features: Feature[];
        number_: number;
        groupingType: StartStopSingle;
        memberOf: string;
    }
    export function xmlToGrouping(node: Node): Grouping;
    export interface Feature {
        data: string;
        type: string;
    }
    export interface FeatureComplete {
        data: string;
        type: string;
    }
    export function xmlToFeature(node: Node): Feature;
    export interface Print {
        measureNumbering: MeasureNumbering;
        partNameDisplay: PartNameDisplay;
        newSystem: boolean;
        newPage: boolean;
        blankPage: string;
        measureLayout: MeasureLayout;
        partAbbreviationDisplay: PartAbbreviationDisplay;
        pageLayout: PageLayout;
        systemLayout: SystemLayout;
        staffSpacing: number;
        staffLayouts: StaffLayout[];
        pageNumber: string;
    }
    export interface PrintComplete {
        measureNumbering: MeasureNumbering;
        partNameDisplay: PartNameDisplay;
        newSystem: boolean;
        newPage: boolean;
        blankPage: string;
        measureLayout: MeasureLayout;
        partAbbreviationDisplay: PartAbbreviationDisplay;
        pageLayout: PageLayout;
        systemLayout: SystemLayout;
        staffSpacing: number;
        staffLayouts: StaffLayout[];
        pageNumber: string;
    }
    export function xmlToPrint(node: Node): Print;
    export interface MeasureNumbering extends PrintStyleAlign {
        data: string;
    }
    export interface MeasureNumberingComplete extends PrintStyleAlignComplete {
        data: string;
    }
    export function xmlToMeasureNumbering(node: Node): MeasureNumbering;
    export interface Sound extends TimeOnly {
        softPedal: boolean;
        midiInstrument: MidiInstrument;
        pan: string;
        tocoda: string;
        decapo: boolean;
        divisions: string;
        pizzicato: boolean;
        coda: string;
        segno: string;
        elevation: string;
        fine: string;
        damperPedal: boolean;
        dynamics: string;
        plays: Play[];
        offset: Offset;
        sostenutoPedal: boolean;
        dalsegno: string;
        midiDevice: MidiDevice;
        tempo: string;
        forwardRepeat: boolean;
    }
    export interface SoundComplete extends TimeOnlyComplete {
        softPedal: boolean;
        midiInstrument: MidiInstrument;
        pan: string;
        tocoda: string;
        decapo: boolean;
        divisions: string;
        pizzicato: boolean;
        coda: string;
        segno: string;
        elevation: string;
        fine: string;
        damperPedal: boolean;
        dynamics: string;
        plays: Play[];
        offset: Offset;
        sostenutoPedal: boolean;
        dalsegno: string;
        midiDevice: MidiDevice;
        tempo: string;
        forwardRepeat: boolean;
    }
    export function xmlToSound(node: Node): Sound;
    export interface Work {
        workNumber: string;
        workTitle: string;
        opus: Opus;
    }
    export interface WorkComplete {
        workNumber: string;
        workTitle: string;
        opus: Opus;
    }
    export function xmlToWork(node: Node): Work;
    export interface Opus {
    }
    export interface OpusComplete {
    }
    export function xmlToOpus(node: Node): Opus;
    export interface Defaults {
        wordFont: WordFont;
        lyricLanguages: LyricLanguage[];
        lyricFonts: LyricFont[];
        pageLayout: PageLayout;
        systemLayout: SystemLayout;
        appearance: Appearance;
        scaling: Scaling;
        staffLayouts: StaffLayout[];
        musicFont: MusicFont;
    }
    export interface DefaultsComplete {
        wordFont: WordFont;
        lyricLanguages: LyricLanguage[];
        lyricFonts: LyricFont[];
        pageLayout: PageLayout;
        systemLayout: SystemLayout;
        appearance: Appearance;
        scaling: Scaling;
        staffLayouts: StaffLayout[];
        musicFont: MusicFont;
    }
    export function xmlToDefaults(node: Node): Defaults;
    export interface MusicFont extends Font {
    }
    export interface MusicFontComplete extends FontComplete {
    }
    export function xmlToMusicFont(node: Node): MusicFont;
    export interface WordFont extends Font {
    }
    export interface WordFontComplete extends FontComplete {
    }
    export function xmlToWordFont(node: Node): WordFont;
    export interface LyricFont extends Font {
        number_: number;
        name: string;
    }
    export interface LyricFontComplete extends FontComplete {
        number_: number;
        name: string;
    }
    export function xmlToLyricFont(node: Node): LyricFont;
    export interface LyricLanguage {
        number_: number;
        name: string;
    }
    export interface LyricLanguageComplete {
        number_: number;
        name: string;
    }
    export function xmlToLyricLanguage(node: Node): LyricLanguage;
    export interface Credit {
        creditTypes: string[];
        creditWords: CreditWords[];
        creditImage: CreditImage;
        page: number;
    }
    export interface CreditComplete {
        creditTypes: string[];
        creditWords: CreditWords[];
        creditImage: CreditImage;
        page: number;
    }
    export function xmlToCredit(node: Node): Credit;
    export interface CreditWords extends TextFormatting {
        words: string;
    }
    export interface CreditWordsComplete extends TextFormattingComplete {
        words: string;
    }
    export function xmlToCreditWords(node: Node): CreditWords;
    export interface CreditImage extends Position, Halign, ValignImage {
        type: string;
        source: string;
    }
    export interface CreditImageComplete extends PositionComplete, HalignComplete, ValignImageComplete {
        type: string;
        source: string;
    }
    export function xmlToCreditImage(node: Node): CreditImage;
    export interface PartList {
        scoreParts: ScorePart[];
        partGroups: PartGroup[];
    }
    export interface PartListComplete {
        scoreParts: ScorePart[];
        partGroups: PartGroup[];
    }
    export function xmlToPartList(node: Node): PartList;
    export interface ScorePart {
        identification: Identification;
        partNameDisplay: PartNameDisplay;
        scoreInstruments: ScoreInstrument[];
        midiDevices: MidiDevice[];
        partName: PartName;
        partAbbreviationDisplay: PartAbbreviationDisplay;
        partAbbreviation: PartAbbreviation;
        groups: string[];
        midiInstruments: MidiInstrument[];
        id: string;
    }
    export interface ScorePartComplete {
        identification: Identification;
        partNameDisplay: PartNameDisplay;
        scoreInstruments: ScoreInstrument[];
        midiDevices: MidiDevice[];
        partName: PartName;
        partAbbreviationDisplay: PartAbbreviationDisplay;
        partAbbreviation: PartAbbreviation;
        groups: string[];
        midiInstruments: MidiInstrument[];
        id: string;
    }
    export function xmlToScorePart(node: Node): ScorePart;
    export interface PartName extends PrintStyle, PrintObject, Justify {
        partName: string;
    }
    export interface PartNameComplete extends PrintStyleComplete, PrintObjectComplete, JustifyComplete {
        partName: string;
    }
    export function xmlToPartName(node: Node): PartName;
    export interface PartAbbreviation extends PrintStyle, PrintObject, Justify {
        abbreviation: string;
    }
    export interface PartAbbreviationComplete extends PrintStyleComplete, PrintObjectComplete, JustifyComplete {
        abbreviation: string;
    }
    export function xmlToPartAbbreviation(node: Node): PartAbbreviation;
    export interface PartGroup extends Editorial {
        groupNameDisplay: GroupNameDisplay;
        groupSymbol: GroupSymbol;
        groupName: GroupName;
        groupAbbreviationDisplay: GroupAbbreviationDisplay;
        groupBarline: GroupBarline;
        number_: number;
        groupAbbreviation: GroupAbbreviation;
        type: StartStop;
        groupTime: GroupTime;
    }
    export interface PartGroupComplete extends EditorialComplete {
        groupNameDisplay: GroupNameDisplay;
        groupSymbol: GroupSymbol;
        groupName: GroupName;
        groupAbbreviationDisplay: GroupAbbreviationDisplay;
        groupBarline: GroupBarline;
        number_: number;
        groupAbbreviation: GroupAbbreviation;
        type: StartStop;
        groupTime: GroupTime;
    }
    export function xmlToPartGroup(node: Node): PartGroup;
    export interface GroupName extends PrintStyle, Justify {
        name: string;
    }
    export interface GroupNameComplete extends PrintStyleComplete, JustifyComplete {
        name: string;
    }
    export function xmlToGroupName(node: Node): GroupName;
    export interface GroupNameDisplay extends PrintObject {
        displayTexts: DisplayText[];
        accidentalTexts: AccidentalText[];
    }
    export interface GroupNameDisplayComplete extends PrintObjectComplete {
        displayTexts: DisplayText[];
        accidentalTexts: AccidentalText[];
    }
    export function xmlToGroupNameDisplay(node: Node): GroupNameDisplay;
    export interface GroupAbbreviation extends PrintStyle, Justify {
        text: string;
    }
    export interface GroupAbbreviationComplete extends PrintStyleComplete, JustifyComplete {
        text: string;
    }
    export function xmlToGroupAbbreviation(node: Node): GroupAbbreviation;
    export interface GroupAbbreviationDisplay extends PrintObject {
        displayTexts: DisplayText[];
        accidentalTexts: AccidentalText[];
    }
    export interface GroupAbbreviationDisplayComplete extends PrintObjectComplete {
        displayTexts: DisplayText[];
        accidentalTexts: AccidentalText[];
    }
    export function xmlToGroupAbbreviationDisplay(node: Node): GroupAbbreviationDisplay;
    export interface GroupSymbol extends Position, Color {
        data: PartSymbolType;
    }
    export interface GroupSymbolComplete extends PositionComplete, ColorComplete {
        data: PartSymbolType;
    }
    export function xmlToGroupSymbol(node: Node): GroupSymbol;
    export interface GroupBarline extends Color {
        data: string;
    }
    export interface GroupBarlineComplete extends ColorComplete {
        data: string;
    }
    export function xmlToGroupBarline(node: Node): GroupBarline;
    export interface GroupTime {
    }
    export interface GroupTimeComplete {
    }
    export function xmlToGroupTime(node: Node): GroupTime;
    export interface ScoreInstrument {
        instrumentName: string;
        instrumentSound: string;
        ensemble: string;
        virtualInstrument: VirtualInstrument;
        instrumentAbbreviation: string;
        solo: Solo;
        id: string;
    }
    export interface ScoreInstrumentComplete {
        instrumentName: string;
        instrumentSound: string;
        ensemble: string;
        virtualInstrument: VirtualInstrument;
        instrumentAbbreviation: string;
        solo: Solo;
        id: string;
    }
    export function xmlToScoreInstrument(node: Node): ScoreInstrument;
    export interface Solo {
    }
    export interface SoloComplete {
    }
    export function xmlToSolo(node: Node): Solo;
    export interface VirtualInstrument {
        virtualLibrary: string;
        virtualName: string;
    }
    export interface VirtualInstrumentComplete {
        virtualLibrary: string;
        virtualName: string;
    }
    export function xmlToVirtualInstrument(node: Node): VirtualInstrument;
    export interface ScoreHeader {
        movementTitle: string;
        identification: Identification;
        defaults: Defaults;
        work: Work;
        credits: Credit[];
        partList: PartList;
        movementNumber: string;
    }
    export interface ScoreHeaderComplete {
        movementTitle: string;
        identification: Identification;
        defaults: Defaults;
        work: Work;
        credits: Credit[];
        partList: PartList;
        movementNumber: string;
    }
    export function xmlToScoreHeader(node: Node): ScoreHeader;
    export interface ScoreTimewise extends DocumentAttributes, ScoreHeader {
        measures: Measure[];
    }
    export interface ScoreTimewiseComplete extends DocumentAttributesComplete, ScoreHeaderComplete {
        measures: Measure[];
    }
    export function xmlToScoreTimewise(node: Node): ScoreTimewise;
    export interface Part {
    }
    export interface PartComplete {
    }
    export function xmlToPart(node: Node): any[];
    export interface Measure {
        number_: string;
        implicit: boolean;
        width: number;
        parts: {
            [x: string]: any[];
        };
        nonControlling: boolean;
    }
    export interface MeasureComplete {
        number_: string;
        implicit: boolean;
        width: number;
        parts: {
            [x: string]: any[];
        };
        nonControlling: boolean;
    }
}
