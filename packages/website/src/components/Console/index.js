import React, {
  useState,
  useCallback,
  useEffect,
  useImperativeHandle,
} from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import ConsoleIcon from './ConsoleIcon';
import './log.css';

/**
 *
 * @param {React.HTMLAttributes<HTMLDivElement> & {}} param0
 * @returns
 */
const Console = React.forwardRef(({ className, ...props }, ref) => {
  const [logs, setLogs] = useState([]);

  const handleMessage = useCallback(
    /** @param {MessageEvent} e */ (e) => {
      if (e.origin !== 'null') return;
      if (e.data.type !== 'html-console-output') return;
      setLogs((logs) => [...logs, e.data.log]);
    },
    []
  );

  const handleClear = useCallback(() => setLogs([]), []);

  useImperativeHandle(ref, () => ({ clearLogs: () => setLogs([]) }));

  useEffect(() => {
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div ref={ref} className={clsx(styles.wrapper, className)} {...props}>
      <div className={clsx(styles.consoleControl)}>
        <div className={styles.consoleHead}>
          <ConsoleIcon />
          Console
        </div>
        <button onClick={handleClear}>Clear console</button>
      </div>
      <div
        className={clsx('console-block', styles.consoleBlock)}
        dangerouslySetInnerHTML={{
          __html: logs
            .reduce(
              (map, value) => {
                if (map?.prev === value) {
                  map.datas.at(-1)[1] += 1;
                } else {
                  map.datas.push([value, 1]);
                }
                map.prev = value;
                return map;
              },
              { prev: '', datas: /** @type {Array<[string, number]>} */ ([]) }
            )
            .datas.reduce((html, [line, count]) => {
              if (count === 1) return html + `\n${line}`;
              const wrapedLine = `<div class="console-line-wrapper"><span class="console-count">${count}</span>${line}</div>`;
              return html + `\n${wrapedLine}`;
            }, ''),
        }}
      ></div>
    </div>
  );
});

export default React.memo(Console);
